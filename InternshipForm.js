'use client'

import { useState } from 'react'
import { db } from '../lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function ContactForm(){

const [form,setForm]=useState({
name:'',
email:'',
message:''
})

const submit = async(e)=>{
e.preventDefault()

await addDoc(collection(db,'contacts'),form)

alert('Message submitted')

setForm({
name:'',
email:'',
message:''
})
}

return(
<div className="card">
<h2>Contact MeshGen</h2>

<form onSubmit={submit}>

<input
placeholder="Name"
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
placeholder="Email"
value={form.email}
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<textarea
rows="5"
placeholder="Message"
value={form.message}
onChange={(e)=>setForm({...form,message:e.target.value})}
/>

<button type="submit">Submit</button>

</form>

</div>
)
}
