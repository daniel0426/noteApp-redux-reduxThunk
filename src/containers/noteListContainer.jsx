import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noteActions from '../store/modules/note';
import NoteLayout from '../components/contentNoteLayout/noteLayout';

class NoteListContainer extends Component {

  handleChangeTitle = (e)=> {
    const {NoteActions} = this.props;
    NoteActions.changeInputTitle(e.target.value);
  };

  handleChangeContent = (e)=> {
    const {NoteActions} = this.props;
    NoteActions.changeInputContent(e.target.value);
  };

  handleSubmit = (e)=> {
    e.preventDefault();
    const {NoteActions, inputTitle, inputContent} = this.props;
    NoteActions.addNote(inputTitle, inputContent);
    NoteActions.changeInputTitle("");
    NoteActions.changeInputContent("");
  }

  handleDelete = (id)=> {
    const {NoteActions} = this.props;
    NoteActions.deleteNote(id);
  }

  render(){
    const {inputTitle, inputContent, noteList} = this.props;
    return (
      <NoteLayout 
        inputTitle={inputTitle}
        inputContent={inputContent}
        noteList = {noteList}
        onChangeTitle={this.handleChangeTitle}
        onChangeContent={this.handleChangeContent}
        onSubmit={this.handleSubmit}
        onDelete={this.handleDelete}
      />
    );
  }
}

const mapStateToProps = ({note}) => ({
  inputTitle: note.inputTitle,
  inputContent : note.inputContent,
  noteList : note.noteList,
})

const mapDispatchToProps = (dispatch) => ({
  NoteActions : bindActionCreators(noteActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer);