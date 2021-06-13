import moment from 'moment';

// Get visible events

export default (events, {text, sortBy, startDate, endDate,type }) => {
  return events
    .filter((event) => {
      const eventDateMoment = moment(event.eventDate);
      const startDateMatch = startDate
        ? moment(startDate).isSameOrBefore(eventDateMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? moment(endDate).isSameOrAfter(eventDateMoment, 'day')
        : true;
      const textMatch = text
        ? event.title.toLowerCase().indexOf(text.toLowerCase()) !== -1
        : true;
      const typeMatch = type ? event.type.toLowerCase().indexOf(text.toLowerCase()) !== -1: true;
      return startDateMatch && endDateMatch && textMatch && typeMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.eventDate < b.eventDate ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
