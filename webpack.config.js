module.exports = {
  "output": {
    "filename": "[main].jsx"
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.jsx$/
      }
    ]
  },
  "entry": {
    "index": "./index"
  }
};