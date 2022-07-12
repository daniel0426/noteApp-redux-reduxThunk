import React from 'react';
import Note from './noteLayout.note';
import AddForm from './noteLayout.addForm';
import {Layout} from 'antd';

const noteLayout = ({
  inputTitle,
  inputContent,
  noteList, 
  onChangeTitle,
  onChangeContent,
  onSubmit, 
  onDelete
}) => {
  const notes = noteList.map((note)=> (
    <Note key={note.id} title={note.title} content={note.content} id={note.id} onRemove={()=>onDelete(note.id)} />
  ));

  return (
    <Layout>
      <AddForm
        inputTitle={inputTitle}
        inputContent={inputContent}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onSubmit={onSubmit}
      >
      </AddForm>
      <div>{notes}</div>
    </Layout>
  )

}

export default noteLayout;