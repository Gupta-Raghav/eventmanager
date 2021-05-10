import { useSelector } from 'react-redux';

export default function useEvents() {
  const { events } = useSelector((s) => s);
  return events;
}
