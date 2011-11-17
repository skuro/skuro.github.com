---
layout: post
title: "GOTO's spirit still haunts Java..."
categories: [java]
---
Some days ago I was debugging some LDAP-related customizations I made on <a title="Alfresco ECM" href="http://www.alfresco.com" target="_blank">Alfresco</a>, and I run into an odd piece of code which made my eyebrow raise: labeled <code>break</code> (and <code>continue</code>) statements. Believe it or not, labels are still there, and someone still uses them. Here's a dumb example:


    String[] someStrings = getStringsFromSomewhere ();
    String[] patterns = getPatternsFromSomewhereElse ();
    // find a string which matches one of the patterns
    // and send it to someone
    outer:
    for (String s : strings)
    {
      for (String pattern : patterns)
      {
        if (str.matches(pattern))
        {
           sendMessage (str);
           break outer;
        }
      }
    }



Using lables, we're now to break the <strong>outer</strong> loop while still inside the <strong>inner</strong> loop. Even if this example code is somewhat clear and straightforward, and it could be handy to use lables in nested loops, with more complex logic and/or with an extensive use of labels, the code can easily became unreadable, with a taste of spaghetti a' la' GOTO.

Anyway, labels can still be used in a clever way, and many renowned code makes use of them. Most notably, <a title="String class sources" href="http://docjar.org/html/api/java/lang/String.java.html" target="_blank"><code>java.lang.String</code></a> contains some good examples (<code>toLowerCase</code> and <code>toUpperCase</code>) which are worth some minutes to understand how they work.

UPDATE:
it turned out, <b>labels can be attached on every kind of statement</b>, not only on loops. Thus this code is still valid Java&trade; code, though it maybe lacks common sense:


    public class Ugly
    {
      public static void main (String[] argv)
      {
        int tmp = 0;
        LABEL:
        {
          ++tmp;
          System.out.println ("before breaking");
          if (true)
            break LABEL;
            System.out.println ("after breaking");
        }
      }
    }


As you can imagine, the second <code>println</code> is neved executed, since the labeled <code>break</code> statement makes the program jump to the end of the labeled statement.
Could you find any reason to give ground for such a code?

Bye!
