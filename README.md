# Lab 8 - Starter
Andrew Park

1) I would put automated tests within a Github action that runs whenever code is pushed. This way, each push can be tested before merging into the main branch. Also, this allows for uniformity and push-standards. 
2) No
3) No, I would not use unit testing for feature. Because a messaging feature requires data to be sent and received by any amount of participating parties, a unit test is not thorough enough to make sure that all of these interacting components work. An end-to-end test is much more appropriate here.
4) Yes, I would use a unit test for this feature. Because a message's length is one individual component of the broader messaging feature, we can simply test what happens if this maximum length is exceeded using unit tests.