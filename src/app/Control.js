"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id ? <>
      <li><Link href={"/update/" + id}>Update</Link></li>
      <li><input type="button" value="delete" onClick={()=>{
        const options = {method: 'delete'}
        fetch('http://localhost:9999/topics/' + id, options)
        .then(resp => resp.json())
        .then(result => {
          router.refresh();
          router.push('/');
        });
      }} /></li>
      </> : null}
    </ul>
  );
}
