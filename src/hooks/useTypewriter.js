import { useEffect, useState } from 'react';

export const useTypewriter = (words, { typing = 80, deleting = 40, pause = 1600 } = {}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timeout;

    if (!isDeleting && text === word) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(isDeleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        isDeleting ? deleting : typing
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typing, deleting, pause]);

  return text;
};