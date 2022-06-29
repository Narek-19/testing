import React from "react";
import {shallow} from 'enzyme';

import {App} from '../App';
import {CommentBox} from "../CommentBox";
import {CommentList} from "../CommentList";
let wrapped;

beforeEach( ()=> {
    wrapped = shallow(<App/>);
})

it('shows a comment box', () => {
    // MANUAL

    // const div = document.createElement('div');
    // ReactDOM.render(<App/>, div);

    //Loks inside the div

    // expect(div.innerHTML).toContain('Comment Box');
    // ReactDOM.unmountComponentAtNode(div);

    const wrapped = shallow(<App/>);
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
    const wrapped = shallow(<App/>);
    expect(wrapped.find(CommentList).length).toEqual(1);
})