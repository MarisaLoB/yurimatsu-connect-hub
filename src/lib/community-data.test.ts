import {describe,it,expect} from 'vitest';
import {findMatches} from './community-data';
describe('demo matchmaking',()=>{
 it('prioritizes a sustainability partner in Japan',()=>{expect(findMatches('Sustainability','Japan')[0]?.id).toBe('kenji');});
 it('changes recommendations when sector and region change',()=>{expect(findMatches('Design','Europe')[0]?.id).toBe('elena');});
});
