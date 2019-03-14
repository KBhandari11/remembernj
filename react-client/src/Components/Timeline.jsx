
import React, { Component } from 'react';

import TimelineComponent from 'react-timeline-component';
const pStyle = {
  textAlign: 'center',
    padding: 30
};
const dates = [
  {
    date: '1933-01-30',
    name: 'Adolf Hitler Appointed as Chancellor'
  },
  {
    date: '1933-02-28',
    name: 'Reichstag Fire Decree'
  },
  {
    date: '1933-03-22',
    name: 'Establishment of Dachau Camp'
  },
  {
    date: '1933-04-01',
    name: 'Anti-Jewish Boycott'
  },
  {
    date: '1933-04-22',
    name: 'Establishment of Dachau Camp'
  },
  {
    date: '1933-04-01',
    name: 'Anti-Jewish Boycott'
  }
]
class Timeline extends Component {
  render() {
    return (
      <div style={pStyle}>
      <TimelineComponent data={ dates }/>
      </div>
    )
  }
}
export default Timeline;
