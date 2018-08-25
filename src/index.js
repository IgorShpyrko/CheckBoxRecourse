import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
// import WebPage from './components/WebPage';
import App from './components/App';

const store = createStore(rootReducer);

const data = [
  {
    "name": "first",
    "children": [
      {
        "name": "first_first",
        "children": [
          {
            "name": "first_first_first",
            "children" : [
              {
                "name": "first_first_first_first",
                "children": []
              },
              {
                "name": "first_first_first_second",
                "children": []
              }
            ]
          },
          {
            "name": "first_first_second",
            "children" : []
          },
          {
            "name": "first_first_third",
            "children" : []
          }
        ]
      },
      {
        "name": "first_second",
        "children": [
          {
            "name": "first_second_first",
            "children" : []
          },
          {
            "name": "first_second_second",
            "children" : []
          },
          {
            "name": "first_second_third",
            "children" : []
          }
        ]
      },
      {
        "name": "first_third",
        "children": [
          {
            "name": "first_third_first",
            "children" : []
          },
          {
            "name": "first_third_second",
            "children" : []
          },
          {
            "name": "first_third_third",
            "children" : []
          }
        ]
      }
    ]
  },
  {
    "name": "second",
    "children": [
      {
        "name": "second_first",
        "children": [
          {
            "name": "second_first_first",
            "children" : []
          },
          {
            "name": "second_first_second",
            "children" : []
          },
          {
            "name": "second_first_third",
            "children" : []
          }
        ]
      },
      {
        "name": "second_second",
        "children": [
          {
            "name": "second_second_first",
            "children" : []
          },
          {
            "name": "second_second_second",
            "children" : []
          },
          {
            "name": "second_second_third",
            "children" : []
          }
        ]
      },
      {
        "name": "second_third",
        "children": [
          {
            "name": "second_third_first",
            "children" : []
          },
          {
            "name": "second_third_second",
            "children" : []
          },
          {
            "name": "second_third_third",
            "children" : []
          }
        ]
      }
    ]
  }
]

ReactDOM.render(
  <Provider store = {store}>
    <App data={data}/>
  </Provider>,
  document.getElementById('root')
)