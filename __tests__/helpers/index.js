import path from 'path';
import fs from 'fs';

const fixturesFolderBefore = path.join(__dirname, '..', 'fixtures', 'before');
const fixturesFolderAfter = path.join(__dirname, '..', 'fixtures', 'after');

const getFileFixtureBefore = pathToFile =>
  fs.readFileSync(path.resolve(fixturesFolderBefore, pathToFile), 'utf8');

const getFileFixtureAfter = pathToFile =>
  fs.readFileSync(path.resolve(fixturesFolderAfter, pathToFile), 'utf8');

export { getFileFixtureBefore, getFileFixtureAfter }; // eslint-disable-line