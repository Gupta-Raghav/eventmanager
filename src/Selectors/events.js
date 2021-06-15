/* eslint-disable import/no-anonymous-default-export */
import moment from 'moment';

// Get visible events

export default (events, { text, sortBy, startDate, endDate, type }) => {
  return events
    .filter((event) => {
      const eventStartDateMoment = moment(event.eventStartDate);
      const eventEndDateMoment = moment(event.eventStartDate);
      const startDateMatch = startDate
        ? moment(startDate).isSameOrBefore(eventStartDateMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? moment(endDate).isSameOrAfter(eventEndDateMoment, 'day')
        : true;
      const textMatch = text
        ? event.title.toLowerCase().indexOf(text.toLowerCase()) !== -1
        : true;
      const typeMatch = type
        ? event.type.toLowerCase().indexOf(type.toLowerCase()) !== -1
        : true;

      return textMatch && typeMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.eventDate < b.eventDate ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
