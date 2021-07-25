import '../src/css/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../src/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import  Home  from "./js/main/home";

import  Profile  from "./js/mypage/myprofile";
import  Mywriting  from "./js/mypage/mywriting";
import  Applygb  from "./js/mypage/applygb";
import  Sidemenu  from "./js/mypage/mypageside";
import  Bookmark  from "./js/mypage/bookmark";
import  Comment  from "./js/mypage/commentwrite";

import  Gbwrite  from "./js/gb/gbwrite";
import  Gblist from "./js/gb/gblist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Home} />
          {/* Mypage */}
          <Route path="/mypage/myprofile" component={Profile} />
          <Route path="/mypage/mywriting" component={Mywriting} />
          <Route path="/mypage/applygb" component={Applygb} />
          <Route path="/mypage/bookmark" component={Bookmark} />
          <Route path="/mypage/mypageside" component={Sidemenu} />
          <Route path="/mypage/commentwrite" component={Comment} />

          {/* GB */}
          <Route path="/gb/gbwrite" component={Gbwrite} />
          <Route path="/gb/gblist" component={Gblist} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
