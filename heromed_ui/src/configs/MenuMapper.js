import React from 'react'

import CalendarSVG from '../shared/IconComponents/calendarSVG'
import MyEventsSVG from '../shared/IconComponents/myEventsSVG'
import HistoryEventSVG from '../shared/IconComponents/pastEventsSVG'
import CreateEventSVG from '../shared/IconComponents/createEventSVG'
import ListOfEventsSVG from '../shared/IconComponents/listOfEventsSVG'
import AdminSVG from '../shared/IconComponents/adminSVG'
import EventsPage from '../pages/EventsPage/EventsPage'
import MyEventsPage from '../pages/MyEvents/MyEventsPage'
import HistoryEventPage from '../pages/HistoryEventPage/HistoryEventPage'
import CreateEventPage from '../pages/CreateEventPage/CreateEventPage'
import ListOfEventsPage from '../pages/ListOfEvents/ListOfEventsPage'

function MenuMapper() {
  return [
    {
      'name': 'Events',
      'url': '/events',
      'icon': <CalendarSVG />,
      'element': <EventsPage />,
    },
    {
      'name': 'My Events',
      'url': '/my-events',
      'icon': <MyEventsSVG />,
      'element': <MyEventsPage />,
    },
    {
      'name': 'History Events',
      'url': '/history-events',
      'icon': <HistoryEventSVG />,
      'element': <HistoryEventPage />,
    },
    {
      'name': 'Create Event',
      'url': '/create-event',
      'icon': <CreateEventSVG />,
      'element': <CreateEventPage />,
    },
    {
      'name': 'List of Events',
      'url': '/list-of-events',
      'icon': <ListOfEventsSVG />,
      'element': <ListOfEventsPage />,
    },
    {
      'name': 'Admin',
      'url': '/admin',
      'icon': <AdminSVG />,
    },
  ]
}

export default MenuMapper
