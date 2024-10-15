// scheduler.js

class Scheduler {
  constructor() {
      this.events = []; // Array to store scheduled events
  }

  addEvent({ start_time, end_time }) {
      // Validate the input
      if (start_time < 0 || end_time > 23 || start_time >= end_time) {
          return false; // Invalid time range
      }

      // Check for overlaps
      for (let event of this.events) {
          if (
              (start_time < event.end_time && end_time > event.start_time)
          ) {
              return false; // Overlap detected
          }
      }

      // No overlap, add the event
      this.events.push({ start_time, end_time });
      return true;
  }

  getEvents() {
      return this.events;
  }
}

module.exports = Scheduler;
