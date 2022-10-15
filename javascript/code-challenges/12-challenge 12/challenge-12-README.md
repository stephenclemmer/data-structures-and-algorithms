![Code Challenge 12 Whiteboard](../assets/Code%20Challenge%2012.png)

**Approach**

This solution uses two queues to ensure that, depending on the prefertence of the person, they will get the appropiate animal, and also that the shelter will give them the animal that has been at the shelter the longest.

Animals are loaded into the primary queue. If the animal at the front of the queue does not match the desirted animal, then animals are dequeued into the secodary queue until the desired animal is at the front of the primary queue, at which case it is removed and returned.

Since the animals in the secondary queue have been in the shelter longest, the secondary queue is always checked first.

Since there are only two types of animals, dogs and cats, then the secondary queue will only be filled with a single type of animal at any one time.

If the desired animal is neither cats nor dogs, then the function returns null.

If the desired animal is a dog or cat, then the first animal fron the secondary queue is returned.
