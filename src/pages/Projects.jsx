import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/TheDarkArtist/repos'; 

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `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`, 
        },
      })
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='' >
      <div className=' text-xl'>My GitHub Projects</div>
      <div className='text-sm'>These projects will open on github for now, though, in future, i plan to add a kind of blog where i will describe each of these projects in detail.</div>
      <ul className='flex flex-wrap py-2' >
        {repos.map((repo) => (
          <li key={repo.id} className='w-full lg:w-[29%]  border rounded-b border-green-500 my-2 lg:mx-2 shadow-md shadow-green-700'>
            <p className='w-full bg-green-700 hover:bg-blue-700 p-1 text-white' ><a className='hover:text-blue-950 ' href={repo.html_url}>{repo.name}</a></p>
            <p className='text-green-600 p-1' >{repo.description}...</p>
            <p className='p-1 text-blue-600'>{repo.language}</p>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Projects
