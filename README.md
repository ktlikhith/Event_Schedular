# Daily Event Scheduler

## Overview
The Daily Event Scheduler is a simple scheduling application that manages events within a 24-hour day. Users can input events with start and end times, and the scheduler ensures that no events overlap. This project was developed using **Angular** for the frontend and **NodeJS** for the backend.

## Features
- Add events with a start time and an end time (in a 24-hour format).
- The scheduler checks for overlapping events and prevents them from being added.
- View all scheduled events in a list format.
- Basic input validation to ensure events are within the range of 0-23 hours.

## Thought Process

### 1. Understanding the Problem
The key requirement of the project was to manage non-overlapping events in a 24-hour day. The `Scheduler` class needed to validate new events by comparing them against existing ones, checking for any conflicts, and ensuring proper boundaries for the day.

### 2. Designing the Solution
I started by designing a `Scheduler` class that manages the core logic of the application. This class:
- Stores events as objects with `start_time` and `end_time` properties.
- Provides a method to add new events (`addEvent`) after checking for overlaps.
- Returns a list of currently scheduled events via the `getEvents` method.

To represent time in a simple format, I used whole numbers to represent the hours of a day (0-23), where 9 represents 9:00 AM, and 17 represents 5:00 PM.

### 3. Backend
On the server side, **NodeJS** handles routing and processing requests. The `Scheduler` logic was developed to be reusable, so events could easily be added and retrieved via a simple API. This also ensures scalability for future additions like persisting events in a database.

### 4. Frontend (UI)
For the user interface, I used **Angular** to create a clean and simple design. The UI consists of:
- Input fields for entering the start and end times of the event.
- A button to add the event after input validation.
- A list displaying all scheduled events.

The UI ensures that users cannot submit invalid inputs or overlapping events, giving immediate feedback when a conflict arises.

### 5. Handling Overlaps
The logic to prevent overlapping events works by comparing the start and end times of new events against all currently scheduled events:
- If a new event starts before an existing event ends and ends after the existing event starts, it is considered an overlap.
- Only events that pass this validation are added to the schedule.

### 6. Input Validation
To prevent invalid inputs (e.g., entering an end time earlier than the start time or times outside the 0-23 range), the form fields in the UI are constrained, and further validation is done in the component.

### 7. Challenges
- Ensuring that the events do not overlap, especially when input values are borderline (e.g., one event ends exactly when another begins).
- Managing and resetting the form inputs after each successful submission to maintain a smooth user experience.

### 8. Possible Enhancements
- **Persisting data**: Storing events in a database to make the scheduler stateful across sessions.
- **Improving the UI**: Adding a more sophisticated timeline view for visualizing events.
- **Event Editing**: Allowing users to modify or delete existing events.
- **Notifications**: Implementing reminders or notifications for upcoming events.

## Project Structure
- **`scheduler.component.ts`**: Handles the core logic for event validation and management.
- **`scheduler.component.html`**: The UI where users input and view events.
- **`app.component.ts`**: Root component that sets up the main structure of the app.
- **`server.js`** (NodeJS): Backend handling request/response for events (if applicable).

## How to Run

### Frontend (Angular)
1. Navigate to the project directory.
2. Run `npm install` to install the dependencies.
3. Use `ng serve` to start the Angular development server.
4. Open the browser at [http://localhost:4200](http://localhost:4200) to view the app.

### Backend (NodeJS)
1. Navigate to the backend folder (if applicable).
2. Run `npm install` to install the necessary packages.
3. Start the server using `node server.js`.
4. The API will be available at [http://localhost:3000](http://localhost:3000) (adjust the port as necessary).

## Conclusion
The **Daily Event Scheduler** provides a solid foundation for managing non-overlapping events, with an easy-to-use UI and clear logic for event validation. This project could be expanded further into a fully-featured calendar or scheduling application by integrating additional features like data persistence, notifications, and more advanced UI elements.
