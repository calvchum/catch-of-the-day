import Rebase from 're-base';

const base = Rebase.createClass({
 apiKey: "AIzaSyCLtj7IXDp0f2M0sTk8dhbr9ZATT73bLlo",
    authDomain: "catch-of-the-day-calvin-cheung.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-calvin-cheung.firebaseio.com",
});

export default base;
//every time we want to connect to firebase, we can use import 'base'