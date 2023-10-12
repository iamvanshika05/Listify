import React, { useState } from "react";

function EditTodo({todo}) {
 

    const [description ,setDescription]  = useState(todo.description)

    //edit description function

    const updateDescription = async(e) =>{
        e.preventDefault()
        try{
            const body = {description};
            const response =  await fetch( `http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(body)
              })   //we have use backtick here for diplaying value of id

              window.location = "/"  //refreshing the code
        }catch(err){
            console.log(err.message)
        }
    }

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)} 
      >
        Edit
      </button>



      <div
        className="modal fade"
        id={ `id${todo.todo_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Edit Todo
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}  //agr hmmye kisi phle mai hi edit krdena ho close krne ki need na ho to
              ></button>
            </div>
            <div className="modal-body">
                <input type="text" className="form-control" value={description}  onChange={e => setDescription(e.target.value)}  />

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}               >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodo;
