'use client'

import { useState } from 'react'
import { db } from '../lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function InternshipForm(){

const [form,setForm]=useState({
name:'',
email:'',
phone:'',
interest:'Artificial Intelligence'
})

const submit = async(e)=>{
e.preventDefault()

await addDoc(collection(db,'internships'),form)

alert('Application submitted')

setForm({
name:'',
email:'',
phone:'',
interest:'Artificial Intelligence'
})
}

return(
<div className="card">
<h2>Training & Internship</h2>

<form onSubmit={submit}>

<input
placeholder="Full Name"
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
placeholder="Email"
value={form.email}
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input
placeholder="Phone"
value={form.phone}
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

<select
value={form.interest}
onChange={(e)=>setForm({...form,interest:e.target.value})}
>
<option>Artificial Intelligence</option>
<option>Cloud Computing</option>
<option>Cybersecurity</option>
<option>DevOps</option>
<option>Full Stack Development</option>
</select>

<button type="submit">Apply Now</button>

</form>

</div>
)
}
