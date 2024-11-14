import {fireEvent, render, screen} from '@testing-library/react'
import Login from '../Pages/Login'

test('test the user id typed',async()=>{
    render(<Login/>);
    const userName=screen.getByTestId("username_field");
    fireEvent.change(userName,{target:{value:"hello"}});
    expect(userName.value).toBe("hello");
})
