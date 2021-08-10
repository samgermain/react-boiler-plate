import React from "react";
import {
  Dropdown,
  Head,
  Input,
  PrimaryButton,
  SearchBar,
  Toggle
} from "components";

const metadata = {
  description: "Home page",
  title: "Home",
  shareImage:
    "https://suddenlysask.com/static/cc701b5ed9329f7c62ace15b5dfec7e6/d00b9/cat.webp",
  path: "/",
};

export default () => (
  <div className="w-100 h-100 py-5 flex-center-row">
    <Head metadata={metadata} />
    <div className="w-100 flex-center-col ">
      <Dropdown className="my-3">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>
      <Input style={{width: 200}} className="my-3" placeholder="Input field" />
      <PrimaryButton className="my-3">Button</PrimaryButton>
      <SearchBar className="my-3" onChange={() => {}} />
      <Toggle 
        className="my-3 col-6"
        options={["Option 1", "Option 2", "Option 3"]}
        col={3}
        breakpoint={778}
        onChange={() => {}}
      />
    </div>
  </div>
);
