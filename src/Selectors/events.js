import moment from 'moment';

// Get visible events

export default (events, { text, sortBy, startDate, endDate }) => {
  return events.filter((event) => {
    const eventDateMoment = moment(event.eventDate);
    const startDateMatch = startDate ? startDate.isSameOrBefore(eventDateMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(eventDateMoment, 'day') : true;
    const textMatch = event.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.eventDate < b.eventDate ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
