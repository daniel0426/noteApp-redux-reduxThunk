import {createAction, handleActions} from 'redux-actions';

//define action types
const INPUT_TITLE = 'INPUT_TITLE';
const INPUT_CONTENT = 'INPUT_CONTENT';
const ADD_NOTE = 'ADD_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';


//create action creators using createAction from redux-actions
let id = 0 ;

export const changeInputTitle = createAction(INPUT_TITLE, (title) => title);
export const changeInputContent = createAction(INPUT_CONTENT, (content)=> content);
export const addNote = createAction(ADD_NOTE, (title, content)=> ({
  id : ++id,
  title,
  content
}));
export const deleteNote = createAction(DELETE_NOTE, (id)=> id);

//define initial note
const initialState = {
  inputTitle : "",
  inputContent : "",
  noteList : [
    {
      id: 0,
      title:'First Note',
      content :'Good to have my own digital note!'
    }
  ]
}

//define reducer function using handleActions from redux-actions
export default handleActions(
  {
    [INPUT_TITLE]:(state, action)=> ({
      ...state,
      inputTitle :action.payload
    }),
    [INPUT_CONTENT]:(state, action)=> ({
      ...state, 
      inputContent : action.payload
    }),
    [ADD_NOTE]:(state, action)=> ({
      ...state,
      noteList: state.noteList.concat({
        id: action.payload.id,
        title: action.payload.title,
        content : action.payload.content
      })
    }),
    [DELETE_NOTE]:(state, action)=> ({
      ...state,
      noteList: state.noteList.filter((note)=> note.id !== action.payload)
    })
  },
  initialState
)