const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AYmdM_nLp67DzPjOYXvWOiPqQ-XImoGUfLJ1mA8e6hGTpXRmPPnwKypKHY4HtVXw470Yu6AyuQNCp7fR",
  client_secret: "EIp5a-xgRNjkr7eT7mO_QqmlhFWMNt1DfZv83IX0bTcCrfJEF9lbFKbjKp5n8trRQ9_amVlYtKm-Bekm",
});

module.exports = paypal;
