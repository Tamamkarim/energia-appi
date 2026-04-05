/// <reference types="vitest" />
import { createAuthor } from './authorModel';

describe('createAuthor', () => {
  it('should create an author object with correct properties', () => {
    const author = createAuthor(1, 'Ali', 'ali@example.com');
    expect(author).toEqual({ id: 1, name: 'Ali', email: 'ali@example.com' });
  });

  it('should assign the correct id', () => {
    const author = createAuthor(5, 'Sara', 'sara@example.com');
    expect(author.id).toBe(5);
  });

  it('should assign the correct name and email', () => {
    const author = createAuthor(2, 'Omar', 'omar@example.com');
    expect(author.name).toBe('Omar');
    expect(author.email).toBe('omar@example.com');
  });
});
