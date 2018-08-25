import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

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
  <App data={data}/>,
document.getElementById('root')
)