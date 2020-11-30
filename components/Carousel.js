import React, { useState, useEffect } from 'react'
import Row from '../components/Row.js'
import Column from '../components/Column.js'

export default function Carousel(props) {
  const [cards, setCards] = useState([]);
  const [display, setDisplay] = useState({left: 0,
                                          center: 0,
                                          right: 0});

  useEffect(() => {
    // Get the number of cards in the carousel
    const count = React.Children.count(props.children);

    // Set the initial indexes for the children to be displayed
    setDisplay({left: wrap(-1, count),
                center: wrap(0, count),
                right: wrap(1, count)});

    // Get the carousel children as an array
    setCards(React.Children.toArray(props.children));
  }, []);

  // Helper function to return the appropriate index if out of bounds
  function wrap(index, size) {
    if(index < 0) {
      return size - 1;
    }
    else if(index >= size) {
      return 0;
    }

    return index;
  }

  function goLeft() {
    const count = React.Children.count(props.children);

    setDisplay({left: wrap(display.left - 1, count),
                center: wrap(display.center - 1, count),
                right: wrap(display.right - 1, count)});
  }

  function goRight() {
    const count = React.Children.count(props.children);

    setDisplay({left: wrap(display.left + 1, count),
                center: wrap(display.center + 1, count),
                right: wrap(display.right + 1, count)});
  }

  function goToDot(index) {
    const count = React.Children.count(props.children);

    setDisplay({left: wrap(index - 1, count),
                center: wrap(index, count),
                right: wrap(index + 1, count)});
  }

  return (
    <Row>
      <Column>
        <Row>
          {props.children}
          <style jsx>{`
            div {
            }
          `}</style>
        </Row>
      </Column>
    </Row>
  )
}
