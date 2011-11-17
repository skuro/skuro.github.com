---
layout: post
title: "H2 embedded DB and Alfresco 3.4"
---
<img class="aligncenter" title="Alfresco logo" src="http://avatar.identi.ca/4350-96-20090811190302.png" alt="" width="96" height="96" />
<img class="aligncenter" title="H2 Database" src="http://www.h2database.com/html/images/h2-logo.png" alt="H2 Database logo" width="136" height="74" />
One of the most useful thing an embedded DB can do for you is to provide a clean environment in your automated tests to use as a clean slate where to repeatedly and reliably test your code. It's been a while since Alfresco <a href="http://issues.alfresco.com/jira/browse/ALFCOM-3691">broke compatibility</a> with some embedded DB we used to run our tests (<a href="http://hsqldb.org/">HSQLDB</a> above all others).

I recently regained interest into cutting out any useless dependency on MySQL or PostgreSQL on the test server to run my Alfresco tests, and H2 looked sexy. I found <a href="http://www.codinginahurry.com/2010/11/27/running-alfresco-33-with-embedded-database-h2-in-postgresql-compability-mode/">here</a> and <a href="https://issues.alfresco.com/jira/browse/ALF-3537">there</a> some promising work by other people, but none worked for me out of the box. I then started from scratch using PostgreSQL DB scripts and voila! Now I have back my Alfresco running against an embeddable DB! You can see &amp; fork <a href="http://bit.ly/nIJuLY">the results</a> of my job if you like. It's supposed to help you with a Maven Alfresco project, but you can probably benefit from it even if you're using some other build tools.

As soon as you have all those files in your classpath, be sure you edit your <em>alfresco-global.properties</em> like the following:
<pre>db.driver=org.h2.Driver
db.url=jdbc:h2:alf_data/h2_data/alfresco
db.username=alfresco
db.password=alfresco
hibernate.dialect=org.hibernate.dialect.H2Dialect</pre>
Make sure you're using an hibernate version &gt;= 3.1 as per H2 <a href="http://www.h2database.com/html/tutorial.html#using_hibernate">documentation</a>.