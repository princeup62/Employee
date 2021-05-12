
import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {


  const [empData, setEmpData] = useState([]);
  const[AddInput,setAddInput]=useState({
    addName:'',
    addEmail:'',
    addPosition:''
  })

  useEffect(()=>
{
  fetch('https://609a7fee0f5a13001721b38f.mockapi.io//Employee')
  .then((response)=>{ response.json().then((result)=>{
      setEmpData(result)
    })
  })
},[])


let handleInputChange= (e)=>
{
  const value =e.target.value;
  const name= e.target.name;

   if (name==='iname')
     setAddInput({...AddInput,addName:value});
   else if (name==='imail')
     setAddInput({...AddInput,addEmail:value})
   else
     setAddInput({...AddInput,addPosition:value})
   console.log(AddInput);
}


let handleSubmit =()=>
{

   const data= {
     Name:AddInput.addName,
     Email:AddInput.addEmail,
     Position:AddInput.addPosition
   }

   setAddInput({addName:'',addEmail:'',addPosition:''})

  fetch('https://609a7fee0f5a13001721b38f.mockapi.io//Employee',{
    method:'POST',
    headers :{
      'Accept':'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
  }).then((result)=>result.json())
  .then((response)=>{setEmpData([...empData,response]);
    alert('data submitted')
  })
  
}

  return (
    <div className="container text-center">
      <h1 className="my-5 text-primary">Employee</h1>
      <div className="row">

      <table className="table table table-striped table-bordered">
      <thead>
         <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Position</th>
        </tr>
      </thead>
      <tbody>
      


      {empData.map((e)=>
        <tr key={e.id}>
            <th scope="row">{e.id}</th>
            <td>{e.Name}</td>
            <td>{e.Email}</td>
            <td>{e.Position}</td>
        </tr>
      )}
          
         
          
      </tbody>
      </table>


      <form>
  <div className="mb-3">
    <input name="iname" type="text" value={AddInput.addName} placeholder="name" onChange={handleInputChange}/>
  </div>


  <div className="mb-3">
    <input name="imail" type="text" value={AddInput.addEmail} placeholder="Email" onChange={handleInputChange}/>
  </div>

  <div className="mb-3">
    <input name="iposition" type="iposition" value={AddInput.addPosition} placeholder="Position" onChange={handleInputChange}/>
  </div>
  
  <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add New</button>
</form>

      </div>
    </div>
  )
}

export default App
