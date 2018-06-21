webpackJsonp([235514874521],{500:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Reports are marked with a severity rating to show how severe the vulnerability is in the report submission form. On HackerOne, severity is particularly useful for structuring bounty ranges and is used when offering bounty recommendations. The severity level can be marked as:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/severity-1-501229fe298ce0d16263f6f38cb4f9a3-f164e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 13.671875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4klEQVQI1x2KQUvCYABA9yeLIKFLhw5dO4SQde3SMfDcKaJaGGWHGpjWElumFkxt2hQ12pJm39fcp6+PDo/3Ds9ojmv4osX7zxu/8QCmHVC+9hA1diFqwbdm4oH0UaMuqlkB75mZ7rhWZXpXRFXKzB/uMdKna+xebZIt7zH8yBG4+3iPGZLgks71Dg1zHfdig7Z+wnoWWTJx0ks8ZVJM8gf421vUU4u8rq7QWF7AsPsWdu8GZ2QjpEccFpGauWyTfFYRvoXoFf6dBA6zvktUyhFax6juC+K2QGSeEJ2f8XV0yB8pL82uQ30EvQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="severity-1"\n        title=""\n        src="/static/severity-1-501229fe298ce0d16263f6f38cb4f9a3-f164e.png"\n        srcset="/static/severity-1-501229fe298ce0d16263f6f38cb4f9a3-29e85.png 125w,\n/static/severity-1-501229fe298ce0d16263f6f38cb4f9a3-7899e.png 250w,\n/static/severity-1-501229fe298ce0d16263f6f38cb4f9a3-f164e.png 256w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>HackerOne utilizes the Common Vulnerability Scoring System (CVSS) - an industry standard calculator used to determine the severity of a bug. The CVSS enables there to be a common language around the severity of bugs. You can either choose a severity level based on their own judgment of the vulnerability, or you can use the CVSS calculator to give more information about the vulnerability and calculate an exact CVSS score.</p>\n<p>The CVSS Calculator provides a way to capture the principal characteristics of a vulnerability and produces a numerical score reflecting its severity. The numerical score can then be translated into a qualitative representation to help properly assess and prioritize inbound vulnerabilities. </p>\n<p>There are 8 metrics defined for CVSS v3. The first 5 are about the attack method itself, while the latter three are dependent on how your program assesses impact - the direct consequence of a successful exploit. These are the different components to the CVSS Calculator:</p>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Detail</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Attack Vector</td>\n<td>How exploitable the vulnerability is. The score increases the more remote an attacker can be in order to exploit the vulnerability.</td>\n</tr>\n<tr>\n<td>Attack Complexity</td>\n<td>The conditions beyond the attacker\'s control that must exist in order to exploit the vulnerability.</td>\n</tr>\n<tr>\n<td>Privilege Required</td>\n<td>The level of privileges an attacker must possess before successfully exploiting the vulnerability. The severity increases as fewer privileges are required.</td>\n</tr>\n<tr>\n<td>User Interaction</td>\n<td>Whether the vulnerability can be exploited solely at the will of the attacker or whether a separate user (or user-initiated process) must participate in some matter.</td>\n</tr>\n<tr>\n<td>Scope</td>\n<td>Whether a successful attack impacts a component other than the vulnerable component.</td>\n</tr>\n<tr>\n<td>Confidentiality</td>\n<td>The impact of the bug as it relates to confidential information being accessed.</td>\n</tr>\n<tr>\n<td>Integrity</td>\n<td>Whether the data can be modified due to the vulnerability.</td>\n</tr>\n<tr>\n<td>Availability</td>\n<td>Whether data or functionality can be rendered inaccessible. The impact to the availability of the impacted component.</td>\n</tr>\n</tbody>\n</table>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/severity-2-f19fd243843afdeb7a4e2da89fd84979-0cd0e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 44.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABN0lEQVQoz4VS2Y6DMAzk/3+OB1aFArttSiHcUK5yBGbjtCC2q6qWRtg4GY/G0dwgx8kLwAMfjF2QpCmEEKiqCqnMkyRBFMUqj+MYk+xRLMuyYZomFEWBvu+hOYyDeT5CzuH7PrIsU4T3+x11XaNpGgXKCdSb53nDSjqOoyLWFjHJQ5Mq6LAQ8zb1UT96a1DvmagPkQ7DoAgp1/AmPM+DYXzBcb5x8a4ob5VSTRejOEHbdei6Vg1r6gZlWT4V7rxYQXG9+pLQgO24yPJc+hgpO4ahh67rOBxMnKXnr+q1fbEnJJMZY6ikb/sgheQ15yHyvPh39y0hDzgsy4JtOyjKaiOkTR6PNgJJWEjlm6efFIZhCNM04bg/ENLsNWgBNOh0ZuoZ4RPhmpMSei5t2/4ZRpukfyte/f8FnsK5iJVNTf8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="severity-2"\n        title=""\n        src="/static/severity-2-f19fd243843afdeb7a4e2da89fd84979-e7ffa.png"\n        srcset="/static/severity-2-f19fd243843afdeb7a4e2da89fd84979-49813.png 125w,\n/static/severity-2-f19fd243843afdeb7a4e2da89fd84979-dc8a5.png 250w,\n/static/severity-2-f19fd243843afdeb7a4e2da89fd84979-e7ffa.png 500w,\n/static/severity-2-f19fd243843afdeb7a4e2da89fd84979-dda24.png 750w,\n/static/severity-2-f19fd243843afdeb7a4e2da89fd84979-c5f18.png 1000w,\n/static/severity-2-f19fd243843afdeb7a4e2da89fd84979-22484.png 1500w,\n/static/severity-2-f19fd243843afdeb7a4e2da89fd84979-0cd0e.png 1840w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><em>Note: It\'s optional for you to submit a severity rating.</em></p>\n<p>You can read more details about CVSS <a href="https://www.first.org/cvss/user-guide">here</a>.</p>\n<p>If the program has a custom methodology for determining severity, it should be described it on their Security Page.</p>',frontmatter:{title:"Severity",id:"hackers/severity",path:"/hackers/severity.html",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---hackers-severity-html-34cf8eddfdd385a1fc19.js.map