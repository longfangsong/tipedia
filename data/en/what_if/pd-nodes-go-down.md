---

category: go_down
aliases: []
tags: [PD]
author: longfangsong
last_update: 2021-03-22T04:09:12Z
---

# What if several pd nodes go down

- less than half of PD nodes
  - Not deploying across data centers:
     - Contains leader
        
       Pause service for (~10) seconds, and resume normal service after re-election.
  
     - Does not contain leader
  
       Nothing bad will happen
    
   - Deploying cross-data center
    
     - Global TSO went down
  
        There is no impact on Local transactions, Global transactions just works like not deploying across data centers.
  
     - Local TSO hanging

       For local transactions, it just works like not deploying across data centers. Note we do allow PDs in other data centers to be elected as the Local TSO of this data center.
  
- More than half of the PD nodes went down

   - Contains leader
  
     Stop the service immediately, tidb will not detect pd for a period of time, it will kill all executing sql and reject future requests
  
   - Does not contain leader
    
     Stop the service after the leader "discovers" (through the heartbeat packet timeout) that most nodes are unavailable (~2 seconds). 


