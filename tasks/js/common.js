"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('3Y69BpyM79HeGt5uWRL4QfmwKcZD0Eqy6h3Vhhzr', 'lP3uJ4vuGme4fFpIAYLuxqBUfuiCyin55GAija7d');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
