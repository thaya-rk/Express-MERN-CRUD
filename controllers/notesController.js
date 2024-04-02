const Note =require('../models/note');

const fetchNotes = async (req,res)=>{
    const notes =await Note.find();
    res.json({notes:notes});
}

const fetchNote = async (req,res)=>{
    const noteId=req.params.id;
    const note=await Note.findById(noteId)
    res.json({note:note })
}

const createNote =async (req,res)=>{
    const title=req.body.title;
    const body=req.body.body;

const note=await Note.create({
    title:title,
    body:body
})

res.json({note:note})

}

const updateNote =async (req,res)=>{   /// using path params ->(/:id)
    const noteId=req.params.id;
     
    //initialising the data off the record 
    const title=req.body.title;
    const body=req.body.body;

    //find and update record
    await Note.findByIdAndUpdate(noteId,{
        title:title,
        body:body,
    });

    const note =await Note.findById(noteId);
    res.json({note:note});
}

const deleteNote =async (req,res)=>{
    const noteId=req.params.id

    //Delete Record 
    await Note.deleteOne({_id:noteId});

    //response once deleted
    res.json({success:"Record Deleted"})
}

module.exports = {
    fetchNotes: fetchNotes,
    fetchNote:fetchNote,
    createNote:createNote,
    updateNote:updateNote,
    deleteNote:deleteNote
}