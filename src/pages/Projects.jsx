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
    <div className='pl-4 min-h-screen' >
      <h2 className='py-1'>My GitHub Projects</h2>
      <ul className='flex flex-wrap' >
        {repos.map((repo) => (
          <li key={repo.id} className='p-2  border  hover:m-1 '>
            <a className='hover:text-slate-400' href={repo.html_url}>{repo.name}</a>
            <p className='text-green-600' >{repo.description}</p>
            <p>{repo.language}</p>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Projects
