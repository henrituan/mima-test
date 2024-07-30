import { makeAutoObservable } from 'mobx';

export type AdverseEvent = {
  date: string;
  events: string[];
};

export type AdverseEventsStore = {
  data: { events: AdverseEvent[] };
  addEvent: (date: string, event: string) => void;
};

const twoDaysAgo = new Date();
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

const threeDaysAgo = new Date();
threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

const intialData: AdverseEvent[] = [
  {
    date: 'Today',
    events: ['Headache', 'Stomachache'],
  },
  {
    date: 'Yesterday',
    events: ['Neck Pain', 'Fever'],
  },
  {
    date: twoDaysAgo.toLocaleDateString(),
    events: ['Back Pain', 'Cough', 'Sore Throat'],
  },
  {
    date: threeDaysAgo.toLocaleDateString(),
    events: ['Headache', 'Fever', 'Cough', 'Insomnia'],
  },
];

const createAdverseEventsStore = () => {
  const data: AdverseEventsStore['data'] = {
    events: intialData,
  };

  const addEvent: AdverseEventsStore['addEvent'] = (date, event) => {
    const index = data.events.findIndex((d) => d.date === date);
    if (index !== -1) {
      data.events[index].events.push(event);
    } else {
      data.events.push({ date, events: [event] });
    }
  };

  return makeAutoObservable({
    data,
    addEvent,
  });
};

export const adverseEventsStore: AdverseEventsStore =
  createAdverseEventsStore();
