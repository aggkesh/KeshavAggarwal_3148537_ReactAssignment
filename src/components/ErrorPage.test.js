import React from 'react';
import ErrorPage, { getError } from './ErrorPage';
import { create } from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Error Page div Component", () => {
    
    test("error render page ", () => {
      const component = create(<Router><ErrorPage match={{params: {id: 400}, isExact: true, path: "", url: ""}} /></Router>);
      const instance = component.root;
      const div = instance.findByType("div");
      expect(div).toBeTruthy()
    });

    test("error for error code returned correctly ", () => {
        expect(getError("404")).toEqual({
            statuscode: "404",
            title: "PAGE NOT FOUND.",
            description: "We Couldn't Find This Page"
        })

        expect(getError("401")).toEqual({
            statuscode: "401",
            title: "Unauthorized.",
            description: "Not Authorized To Access page"
        })

        expect(getError("500")).toEqual({
            statuscode: "500",
            title: "Internal Server Error.",
            description: "Problem Reaching Out Server Please Try Again Later"
        })

        expect(getError("304")).toEqual({
            statuscode: "404",
            title: "PAGE NOT FOUND.",
            description: "We Couldn't Find This Page"
        })
    });

});