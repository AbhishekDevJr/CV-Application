import React from 'react';
import {useState, useEffect} from 'react';

function Socials(props){
    return(
        <div className = "footer-section">
            <footer>
                <p>Built by Abhishek Choudhari</p>
                <a href = "https://github.com/AbhishekDevJr"><img src = "icons8-github-48.png" alt = "GitHub Icon" /></a>
                <a href = "https://www.linkedin.com/in/abhishek-choudhari-408526173/"><img src = "icons8-linkedin-circled-50.png" alt = "LinkedIn Icon" /></a>
            </footer>
        </div>
    );
}

export default Socials;