import { useState } from 'react';
import gemini from './gemini';
import Names from './names';

export default function NameGenerator() {
  const [alcoholType, setAlcoholType] = useState('beer');
  const [alcoholDescription, setAlcoholDescription] = useState('');
  const [alcoholNames, setAlcoholNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <section className="flex-col flex gap-3">
      <h2 className="header">Generate a Name</h2>
      <div className="form">
        <div className="form-group">
          <label
            className="form-label"
            htmlFor="alcohol-type"
          >
            What type of alcohol are you making?
          </label>
          <select
            className="form-input"
            id="alcohol-type"
            value={alcoholType}
            onChange={(e) => setAlcoholType(e.target.value)}
          >
            <option value="beer">Beer</option>
            <option value="wine">Wine</option>
            <option value="cider">Cider</option>
            <option value="mead">Mead</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label
            className="form-label"
            htmlFor="alcohol-description"
          >
            What did you use to make it? (optional)
          </label>
          <textarea
            className="form-textarea"
            id="alcohol-description"
            value={alcoholDescription}
            onChange={(e) => setAlcoholDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <button
            className="form-button"
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              gemini(alcoholType, alcoholDescription).then((names) => {
                setAlcoholNames(names);
                setIsLoading(false);
              });
            }}
          >
            {isLoading ? 'Generating' : 'Generate a Name'}
          </button>
        </div>
        <Names names={alcoholNames} isLoading={isLoading} />
      </div>
    </section>
  );
}
