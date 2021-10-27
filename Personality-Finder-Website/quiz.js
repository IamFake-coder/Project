function a() {
    let msg;
    let thinking = [];
    let feeling = [];
    let extraversion = [];
    let introversion = [];
    let judging = [];
    let perceiving = [];
    let sensing = [];
    let intuition = [];
    let email = document.getElementById("inputemail").value;
    console.log(document.getElementById("inputemail").value);

    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            if (document.getElementsByName("thinking" + [i])[j].checked == true) {
                Selected = document.getElementsByName("thinking" + [i])[j].value;
                thinking.push(Selected);
            }
        }
    }


    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            if (document.getElementsByName("feeling" + [i])[j].checked == true) {
                Selected = document.getElementsByName("feeling" + [i])[j].value;
                feeling.push(Selected)
            }
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            if (document.getElementsByName("extraversion" + [i])[j].checked == true) {
                Selected = document.getElementsByName("extraversion" + [i])[j].value;
                extraversion.push(Selected)
            }
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            if (document.getElementsByName("judging" + [i])[j].checked == true) {
                Selected = document.getElementsByName("judging" + [i])[j].value;
                judging.push(Selected)
            }
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            if (document.getElementsByName("introversion" + [i])[j].checked == true) {
                Selected = document.getElementsByName("introversion" + [i])[j].value;
                introversion.push(Selected)
            }
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            if (document.getElementsByName("perceiving" + [i])[j].checked == true) {
                Selected = document.getElementsByName("perceiving" + [i])[j].value;
                perceiving.push(Selected)
            }
        }
    }

    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            if (document.getElementsByName("sensing" + [i])[j].checked == true) {
                Selected = document.getElementsByName("sensing" + [i])[j].value;
                sensing.push(Selected)
            }
        }
    }
    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j <= 4; j++) {
            if (document.getElementsByName("intuition" + [i])[j].checked == true) {
                Selected = document.getElementsByName("intuition" + [i])[j].value;
                intuition.push(Selected)
            }
        }
    }

    let all = [];


    let thinking_avg = thinking.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }) / 5;
    all.push(thinking_avg);

    let feeling_avg = feeling.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0) / 5;
    all.push(feeling_avg);

    let extraversion_avg = extraversion.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0) / 5;
    all.push(extraversion_avg);

    let introversion_avg = introversion.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0) / 5;
    all.push(introversion_avg);

    let judging_avg = judging.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0) / 5;
    all.push(judging_avg);

    let perceiving_avg = perceiving.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0) / 5;
    all.push(perceiving_avg);

    let sensing_avg = sensing.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0) / 5;
    all.push(sensing_avg);

    let intuition_avg = intuition.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0) / 5;
    all.push(intuition_avg);

    let top_four = [];
    if (all[0] > all[1]) {
        top_four.push("T");
    }
    else {
        top_four.push("F");
    }
    if (all[2] > all[3]) {
        top_four.push("E");
    }
    else {
        top_four.push("I");
    }
    if (all[4] > all[5]) {
        top_four.push("J");
    }
    else {
        top_four.push("P");
    }
    if (all[6] > all[7]) {
        top_four.push("S");
    }
    else {
        top_four.push("N");
    }

    let user_pers = top_four.toString();
    console.log(user_pers);

    if (user_pers.includes('I') && user_pers.includes('S') && user_pers.includes('T') && user_pers.includes('J')) {
        category = "The Inspector";
        msg = `<h1>You fall into category of ISTJ: The Inspector </h1> 
        <p>ISTJ (introversion, sensing, thinking, judgment) is a four-letter code representing one of the 16 personality types found on the Myers-Briggs Type Indicator (MBTI). People with an ISTJ personality type tend to be reserved, practical and quiet. They enjoy order and organization in all areas of their lives including their home, work, family, and projects. ISTJs value loyalty in themselves and others, and place an emphasis on traditions. </p>

        <h3>Personal Relationships</h3>

        <p>ISTJs prefer spending time alone or with small groups of close friends. People with this personality type are usually very loyal and devoted to family and friends but may struggle to understand their own emotions and the feelings of others. They can be quite reserved and sometimes fail to pick up on the emotional signals given by other people. However, once they are close to a person and develop an understanding of that person's feelings and needs, they will expend a great deal of effort toward supporting those needs. 
        </p>
        
        <h3>Career Paths</h3>
        <p>Because of this need for order, they tend to do better in learning and work environments that have clearly defined schedules, clear-cut assignments, and a strong focus on the task at hand. When learning new things, ISTJs do best when the material is something they view as useful with real-world applications. Concrete, factual information appeals to ISTJs, while theoretical and abstract information has little value unless they can see some type of practical use for it. While they may exert tremendous energy into projects they see as valuable, they will avoid wasting time and energy on things that they view as useless or unpractical.</p> 

        <p>ISTJs tend to do well in careers that require order, structure, and perseverance. Jobs that involve dealing with concrete facts and figures (accounting, library science, computer programming, etc.) are all good options. Jobs that require accuracy, respect for rules and stability often appeal to those with an ISTJ personality. </p>
        <p>Fore more information please check MBTI types on our website</p>
                 
        `;
    }
    if (user_pers.includes('I') && user_pers.includes('S') && user_pers.includes('T') && user_pers.includes('P')) {
        category = "The Crafter";
        msg = `<h1>You fall into category of ISTP: The Crafter  </h1> 
        <p>ISTP (introverted, sensing, thinking, perceiving) is one of the 16 personality types identified by the Myers-Briggs Type Indicator (MBTI). People with ISTP personalities enjoy having time to think alone and are fiercely independent. ISTPs also love action, new experiences, hands-on activities, and the freedom to work at their own pace. </p>
         
         <p>ISTPs enjoy taking things apart just to see how they work. They are logical and rational, but are more interested in practical applications than in abstract ideas. They love doing new things and can become bored with routines rather quickly. </p>

        <h3>Personal Relationships</h3>

        <p>ISTPs are introverts and they tend to be quiet and reserved. They thrive on new experiences and dislike strict routines. In relationships, they are highly independent and do not like to feel controlled. Making commitments is difficult for the ISTP, but will put a lot of effort into relationships that hold their interest.</p>
        <p>They do not often share their emotions with other people. While they enjoy hearing what other people think, they frequently keep their own opinions to themselves. For these reasons, people sometimes describe ISTPs as difficult to get to know. They often find friends who enjoy similar hobbies as they do and enjoy spending time with these friends as they pursue these activities. 
        </p>
        
        <h3>Career Paths</h3>
        <p>Because ISTPs are introverted, they often do well in jobs that require working alone. ISTPs tend to dislike too much structure and do well in careers where they have a lot of freedom and autonomy. Because they are very logical, they often enjoy work that involves reasoning and hands-on experience. In particular, ISTPs like doing things that have practical, real-world applications. </p> 

        <p>Fore more information please check MBTI types on our website</p>
                 
        `;
    }
    if (user_pers.includes('I') && user_pers.includes('S') && user_pers.includes('F') && user_pers.includes('J')) {
        category = "The Protector";
        msg = `<h1>You fall into category of ISFJ: The Protector </h1> 
            <p>ISFJ is one of the 16 personality types identified on the Myers-Briggs Type Indicator (MBTI), the personality test developed by Isabel Myers and her mother Katherine Briggs based on the theories of psychoanalyst Carl Jung. ISFJ stands for introverted, sensing, feeling, judging.</p>
             
             <p>This personality type is given the nickname "The Protector" or "The Defender," and for good reason. People who have ISFJ personalities are known for being warm-hearted, responsible, and reserved. The ENTP personality type is the opposite. This personality type is one of the more common ones. They make up about 9% to 14% of the population. </p>

            <h3>Personal Relationships</h3>

            <p>Because they are quiet, people sometimes misinterpret this as standoffish behavior. However, ISFJs are compassionate and caring toward others, often working to secure the safety and well-being of other people without asking for thanks or anything in return. </p>
            <p>Because they are hard-working, dependable, and rarely seek accolades for their own accomplishments, ISFJs are sometimes taken for granted by those around them. In some cases, people might even try to take advantage of this reliability. </p>
            <p>ISFJs tend to have a small group of very close friends. While they may be quiet and reserved around people they don’t know well, they are more likely to "let loose" when they are around these close confidants. They place a high value on these close friendships and are always willing to support and care for the people to whom they are close. 
            </p>
            
            <h3>Career Paths</h3>
            <p>ISFJs have many characteristics that make them well-suited to particular careers. Because they are so attuned to the feelings of others, jobs in mental health or the healthcare industry are a good fit. </p> 
            <p>They are also meticulous and orderly, making them suited to jobs that involve planning, structure, or attention to detail. Their commitment to their work, reliability, and ability to work independently make them attractive to a wide variety of employers. </p>
            <p>Because of their solid people skills and desire to create order, they often do well in management or administrative roles. They excel at coming up with plans and helping other people work together to achieve a common goal. </p>
            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('I') && user_pers.includes('S') && user_pers.includes('F') && user_pers.includes('P')) {
        category = "The Artist";
        msg = `<h1>You fall into category of ISFP: The Artist</h1> 
            <p>ISFP is a four-letter code representing one of the 16 personality types identified by the Myers-Briggs Type Indicator.
            People with an ISFP personality are frequently described as quiet, easy-going and peaceful. According to David Keirsey, the creator of the Keirsey Temperament Sorter, approximately 5 to 10 percent of people have an ISFP personality type. ISFP is the opposite of ENTJ. </p>
             
             <p>According to psychologist David Keirsey, creator of the Keirsey Temperament Sorter, 
             approximately 1% to 5% of people have an INTP personality type. </p>

            <h3>Personal Relationships</h3>

            <p>ISFPs are introverted. They tend to be reserved and quiet, especially around people they do not know well. They prefer spending time with a close group of family and friends. </p>
            <p>ISFPs are very private and keep their true feelings to themselves. In some cases, they may avoid sharing their thoughts, feelings and opinions with other people in their life, even their romantic partners. Because they prefer not to share their innermost feelings and try to avoid conflict, they often defer to the needs or demands of others.</p>
            <p>ISFPs have strong values but are not concerned with trying to convince other people to share their point of view. They care deeply about other people, particularly their closest friends and family. They are action-oriented and tend to show their care and concern through action rather than discussing feelings or expressing sentiments. </p>
            
            <h3>Career Paths</h3>
            <p>People with ISFP personalities love animals and have a strong appreciation for nature. They may seek out jobs or hobbies that put them in contact with the outdoors and with animals.</p> 
            <p>Because ISFPs prefer to focus on the present, they often do well in careers that are concerned with practical, real-world problems. Jobs that offer a great deal of personal freedom and autonomy are especially appealing to ISFPs. </p>
            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('I') && user_pers.includes('N') && user_pers.includes('F') && user_pers.includes('J')) {
        category = "The Advocate";
        msg = `<h1>You fall into category of INFJ: The Advocate </h1> 
        <p>INTP (introverted, intuitive, thinking, perceiving) is one of the 16 personality 
        types described by the Myers-Briggs Type Indicator (MBTI).1 People who score as INTP are often 
        described as quiet and analytical. They enjoy spending time alone, thinking about how things work, 
        and coming up with solutions to problems. INTPs have a rich inner world and would rather focus their 
        attention on their internal thoughts rather than the external world. They typically do not have a wide
         social circle, but they do tend to be close to a select group of people.</p>
         <p>According to psychologist David Keirsey, creator of the Keirsey Temperament Sorter, 
         approximately 1% to 5% of people have an INTP personality type. </p>

        <h3>Personal Relationships</h3>

        <p>As introverts, INTPs prefer spending time alone for the most part. Unlike extraverts, who gain energy 
        from interacting with a wide group of people, introverts must expend energy in social situations.2 After 
        being around a lot of people, INTPs might feel like they need to spend some time alone to recharge and 
        find balance. While they may be shy around people they do not know well, INTPs tend to be warm and 
        friendly with their close group of family and friends.</p>
        <p>Because INTPs enjoy solitude and deep thinking, they sometimes strike others as aloof and detached. 
        At times, people with this personality type can get lost in their own thoughts and lose track of the 
        outside world. They love ideas and place a high value on intelligence and knowledge.
        <p>In social situations, INTPs tend to be quite easy-going and tolerant. However, they can become unyielding 
        when their beliefs or convictions are challenged. Their high emphasis on logic can make it difficult to not 
        correct others in situations where other people present arguments that are not rational or logical. Because 
        they rely on their own minds rather than others, they can also be very difficult to persuade.</p>
        </p>
        
        <h3>Career Paths</h3>
        <p>Because they enjoy theoretical and abstract concepts, INTPs often do particularly well in science-related careers. 
        They are logical and have strong reasoning skills, but are also excellent at thinking creatively.
        INTPs can be very independent and place a great deal of emphasis on personal freedom and autonomy. In some cases, 
        they can be aggravated by authority figures, particularly those that they feel are trying to suppress their ability 
        to think and act for themselves. Because of this, INTPs typically do best in careers as they have a great deal of 
        flexibility and independence. </p> 

        <p>Fore more information please check MBTI types on our website</p>
                 
        `;
    }
    if (user_pers.includes('I') && user_pers.includes('N') && user_pers.includes('F') && user_pers.includes('P')) {
        category = "The Mediator";
        msg = `<h1>You fall into category of INFP: The Mediator </h1> 
            <p>INFP (introversion, intuition, feeling, perception) is a four-letter abbreviation for one of the 16 personality 
            types identified by the Myers-Briggs Type Indicator.1 The INFP personality type is often described as an "idealist"
             or "mediator" personality. People with this kind of personality tend to be introverted, idealistic, creative, and 
             driven by high values.</p>
             
             <p>INFPs also have strong interests in making the world a better place. In addition to wanting to gain a greater understanding of 
             themselves and how they fit into the world, they are also interested in how they can best help others. People with this personality 
             type spend a lot of time exploring their own purpose in life and thinking about how they can use their skills and talents to best serve humanity. </p>
            <p>INFP is also the opposite personality type of ESTJ. Other similar personality types include INTP and ENFJ. </p>
            
            <h3>Personal Relationships</h3>

            <p>INFPs are idealists so they tend to have high expectations—including in relationships. They might hold an idealized 
            image in their minds of their perfect partner, which can be a difficult role for any individual to fill.</p>
            <p>People with this personality type care deeply about other people, yet as introverts they can be difficult to know. 
            They do tend to become very close and deeply committed to the few that they forge close relationships with. </p>
            <p>They also dislike conflict and try to avoid it. When conflicts or arguments do arise, they usually focus more on how the 
            conflict makes them feel rather than the actual details of the argument. During arguments, they might seem overly emotional 
            or even irrational. However, they can also be good mediators by helping the people involved in a conflict identify and express their feelings. </p>
            <p>Because they are so reserved and private, it can be difficult for other people to get to know INFPs. They tend to be quite devoted to their circle 
            of close friends and family and place a high importance on the feelings and emotions of their loved ones.1 Much of their energy 
            is focused inwardly and characterized by intense feelings and strong values. They tend to be very loyal to the people they love 
            and to beliefs and causes that are important to them.</p>
            
            <h3>Career Paths</h3>
            <p> INFPs typically do well in careers where they can express their creativity and vision. While they work well with others, they generally prefer to work alone. 
            INFPs tend to be very creative, artistic, and spiritual. They are often skilled with language but may prefer to express their thoughts and feelings through
            writing rather than speaking. Because they have strong ethics and values, they also become passionate about advocating or defending their beliefs. While they
            feel strongly about their own values, INFPs are also interested in learning more about others and are willing to listen and consider many sides of an issue. </p> 

            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('I') && user_pers.includes('N') && user_pers.includes('T') && user_pers.includes('J')) {
        category = "The Architect";
        msg = `<h1>You fall into category of INTJ: The Architect </h1> 
            <p>INTJ (introverted, intuitive, thinking, and judging) is one of the 16 personality types identified by a personality assessment 
            called the Myers-Briggs Type Indicator (MBTI). Sometimes referred to as the "Architect" or the "Strategist," people with INTJ 
            personalities are highly analytical, creative, and logical. According to psychologist David Keirsey, developer of the Keirsey 
            Temperament Sorter, approximately 1 to 4% of the population has an INTJ personality type. </p>
             
            <p>The MBTI is one of the most popular psychological assessments, but critics have argued that it lacks both validity and reliability.2 If you take the MBTI, 
            be sure to use caution when considering the meaning of your results.You can learn more about the INTJ personality in this overview. However, this 
            should not be interpreted as health, psychological, or professional career advice.  </p>

            <h3>Personal Relationships</h3>

            <p>People with this personality type are introverted and spend a lot of time in their own mind. INTJs work best by 
            themselves and strongly prefer solitary work to group work.</p>
            <p>While they tend not to be particularly interested in other people's thoughts and feelings, they do care about the emotions of the select group of people to whom they are close. In personal relationships, 
            INTJs are willing to devote time and energy toward making these relationships successful. </p>
            <p>Other people often interpret INTJs as cool, aloof, and disinterested, which can make forming new friendships challenging. People with this type of personality often see little value in social rituals and 
            small talk, making it even more difficult to get to know them. They tend to be reserved and prefer to interact with a group of close family and friends. 
            </p>
            
            <h3>Career Paths</h3>
            <p>When INTJs develop an interest in something, they strive to become as knowledgeable and skilled as they can in that area. They have high expectations, and they hold themselves to the highest possible standards. </p>
            <p>INTJs are good at gathering information from the outside world, analyzing it, and reaching new insights. People with this personality type tend to be very analytical and logical. They value information, knowledge, and intelligence, and make excellent scientists and mathematicians. They tend to do particularly well in fields that require efficiency and the ability to interpret complex information such as engineering, academia, law, and research.</p> 
            <p>INTJs typically do well in careers that integrate their strong ability to understand and evaluate complex information with their ability to put this knowledge into practice. Careers that allow the INTJ to work independently and autonomously are also ideal. </p>
            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('I') && user_pers.includes('N') && user_pers.includes('T') && user_pers.includes('P')) {
        category = "The Thinker";
        msg = `<h1>You fall into category of INTP: The Thinker </h1> 
            <p>INTP (introverted, intuitive, thinking, perceiving) is one of the 16 personality 
            types described by the Myers-Briggs Type Indicator (MBTI).1 People who score as INTP are often 
            described as quiet and analytical. They enjoy spending time alone, thinking about how things work, 
            and coming up with solutions to problems. INTPs have a rich inner world and would rather focus their 
            attention on their internal thoughts rather than the external world. They typically do not have a wide
             social circle, but they do tend to be close to a select group of people.</p>
             
             <p>According to psychologist David Keirsey, creator of the Keirsey Temperament Sorter, 
             approximately 1% to 5% of people have an INTP personality type. </p>

            <h3>Personal Relationships</h3>

            <p>As introverts, INTPs prefer spending time alone for the most part. Unlike extraverts, who gain energy 
            from interacting with a wide group of people, introverts must expend energy in social situations.2 After 
            being around a lot of people, INTPs might feel like they need to spend some time alone to recharge and 
            find balance. While they may be shy around people they do not know well, INTPs tend to be warm and 
            friendly with their close group of family and friends.</p>
            <p>Because INTPs enjoy solitude and deep thinking, they sometimes strike others as aloof and detached. 
            At times, people with this personality type can get lost in their own thoughts and lose track of the 
            outside world. They love ideas and place a high value on intelligence and knowledge.
            <p>In social situations, INTPs tend to be quite easy-going and tolerant. However, they can become unyielding 
            when their beliefs or convictions are challenged. Their high emphasis on logic can make it difficult to not 
            correct others in situations where other people present arguments that are not rational or logical. Because 
            they rely on their own minds rather than others, they can also be very difficult to persuade.</p>
            </p>
            
            <h3>Career Paths</h3>
            <p>Because they enjoy theoretical and abstract concepts, INTPs often do particularly well in science-related careers. 
            They are logical and have strong reasoning skills, but are also excellent at thinking creatively.
            INTPs can be very independent and place a great deal of emphasis on personal freedom and autonomy. In some cases, 
            they can be aggravated by authority figures, particularly those that they feel are trying to suppress their ability 
            to think and act for themselves. Because of this, INTPs typically do best in careers as they have a great deal of 
            flexibility and independence. </p> 

            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('E') && user_pers.includes('S') && user_pers.includes('T') && user_pers.includes('P')) {
        category = "The Persuader";
        msg = `<h1>You fall into category of INTP: The Thinker </h1> 
            <p>ESTP is one of the 16 personality types identified by the Myers-Briggs Type Indicator (MBTI). People with this personality type are frequently described as outgoing, action-oriented, and dramatic. ESTPs are outgoing and enjoy spending time with a wide circle of friends and acquaintances. They are interested in the here-and-now and are more likely to focus on details than taking a broader view of things.</p>
             
             <p> People with this personality type are logical. When making decisions, they place a higher value on objectivity rather than personal feelings. ESTPs don't like to be pinned down by excessive planning. Instead, they like to improvise and keep their options open.

             According to psychologist David Keirsey, the creator of the Keirsey Temperament Sorter, approximately 4—10% of people exhibit an ESTP personality. It is believed to be one of the most common personality types.</p>

            

            <h3>Personal Relationships</h3>

            <p>As extraverts, ESTPs gain energy from being around other people. In social settings, people with this personality type are seen as fun, friendly, and charming. </p>
            <li>Strong people skills: According to Keirsey, people with this personality type are particularly skilled at influencing people. ESTPs are not only great at interacting with other people, but they also have a natural ability to perceive and interpret nonverbal communication..</li>
            <li>Difficulty with commitment: While they are great with people, ESTPs prefer to live in the moment, which can sometimes make it hard for them to commit to a relationship. Because they are so focused on the present, it can be difficult to think about their long-term plans.</li>
            <li>Can seem insensitive: ESPTs sometimes have a hard time tuning in to what others are thinking or feeling. As a result, they can sometimes say things that might be perceived as insensitive and may need to put in extra effort to pay attention to their friends and partners.</li>
            
            <h3>Career Paths</h3>
            <p>The MBTI also suggests that certain personality types may exhibit preferences and strengths that align them with certain careers.3﻿ People with an ESTP personality type feel energized when they interact with a wide variety of people, so they do best in jobs that involve working with others. They strongly dislike routine and monotony, so fast-paced jobs are ideal. </p> 
            <p>ESTPs have several different personality characteristics that make them well-suited for certain careers. Because of their strong people skills, ESTPs tend to do very well in careers that involve sales and marketing. </p>
            <p>Because they are action-oriented and resourceful, they are great in first-responder positions that require fast-thinking and quick responses, such as emergency medical personnel and police officers. </p>

            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('E') && user_pers.includes('S') && user_pers.includes('T') && user_pers.includes('J')) {
        category = "The Director";
        msg = `<h1>You fall into category of ESTJ: The Director </h1> 
            <p>ESTJ is one of the 16 personality types identified by the Myers-Briggs Type Indicator (MBTI). ESTJs are often described as logical, take-charge kind of people.1 They are assertive and are very concerned with making sure that things run smoothly and according to the rules. They are committed to tradition, standards, and laws. They have strong beliefs and possess sensible judgment, and expect that other people uphold these same principles as well. </p>
             
             <p>An estimated 8% to 12% of the U.S. population has an ESTJ personality. David Keirsey, the creator of the Keirsey Temperament Sorter, suggests that the ESTJ personality type is the "Guardian Supervisor," one of four "Guardian" archetypes (Supervisor, Inspector, Provider, Protector).</p>

            <h3>Personal Relationships</h3>

            <p>As extroverts, ESTJs are very outgoing and enjoy spending time in the company of others. They can be very boisterous and funny in social situations and often enjoy being at the center of attention. </p>
            <p>Family is also of the utmost importance to ESTJs. They put a great deal of effort into fulfilling their family obligations. Social events are also important and they are good at remembering important events such as birthdays and anniversaries. They look forward to attending weddings, family reunions, holiday parties, class reunions, and other occasions. </p>
            <p>One potential area of weakness for ESTJs is their tendency to be rigid when it comes to rules and routines. They take their own opinion quite seriously, and are often less inclined to listen to what others have to say on a subject. </p>
            
            <h3>Career Paths</h3>
            <p>Because they appreciate order and organization, they frequently do well in supervisory roles.When in such positions, they are committed to making sure that members of the group follow rules and traditions and law established by higher authorities. </p> 
            <p>In school and work situations, ESTJs are very hard-working and dependable. They strive to follow directions to the letter and show a great deal of respect and deference for authority figures. They are thorough and punctual about completing their work, and rarely question or complain about the work they have to do. </p>
            <p>ESTJs have a wide range of personality characteristics that help them excel at a number of different careers. Their emphasis on rules and procedures make them well-suited to supervisory and management positions, while their respect for laws, authority, and order help them excel in law enforcement roles. </p>
            
            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('E') && user_pers.includes('S') && user_pers.includes('F') && user_pers.includes('P')) {
        category = "The Performer";
        msg = `<h1>You fall into category of ESFP: The Performer </h1> 
            <p>ESFP (extraverted, sensing, feeling, perceiving) is one of the 16 personality types identified by the Myers-Briggs Type Indicator.1 People with ESFP personality types are often described as spontaneous, resourceful, and outgoing. They love being the center of attention and are often described as entertainers or “class clowns.” ESFP is the opposite of the INTJ personality type. </p>
             
             <p>According to psychologist David Keirsey, the developer of the Keirsey Temperament Sorter, approximately 4% to 10% of all people have an ESFP personality type. </p>

            <h3>Personal Relationships</h3>

            <p>As extraverts, ESFPs enjoy spending time with other people and have excellent interpersonal skills.2 They are good at understanding how other people are feeling and can respond to other people's emotions in productive ways. For this reason, ESFPs can make good leaders and have a knack for mobilizing, motivating, and persuading group members. </p>
            <p>ESFPs are often described as warm, kind, and thoughtful, making them popular and well-liked by others. ESFPs enjoy meeting new people, but they also have a thirst for new experiences. They are generally focused on the present and will often be the first person to try the newest ride at an amusement park or try out a new adventure sport. 
            </p>
            
            <h3>Career Paths</h3>
            <p>With their strong dislike for routine, ESFPs do best in careers that involve a lot of variety. Jobs that involve a great deal of socializing are also a great fit, allowing individuals with this personality type to put their considerable people skills to good use. Careers that involve a great deal of structure and solitary work can be difficult for ESFPs, and they often become bored in such situations. </p> 

            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('E') && user_pers.includes('S') && user_pers.includes('F') && user_pers.includes('J')) {
        category = "The Caregiver";
        msg = `<h1>You fall into category of ESFJ: The Caregiver </h1> 
            <p>ESFJ, also known as "The Caregiver" or "The Consul," is one of the 16 personality types identified by the Myers-Briggs Type Indicator. People with an ESFJ personality type tend to be outgoing, loyal, organized, and tender-hearted. ESFJs gain energy from interacting with other people. </p>
             
             <p>They are typically described as outgoing and gregarious. They have a way of encouraging other people to be their best and often have a hard time believing anything bad about the people they are close to. </p>
                <p>According to psychologist David Keirsey, approximately 9% to 13% of the population has an ESFJ personality type.</p>
            
                <h3>Personal Relationships</h3>

            <p>As extroverts, ESFJs love spending time with other people. Not only do they gain energy from social interaction, but they are also genuinely interested in the well-being of others. They are frequently described as warm-hearted and empathetic, and they will often put the needs of others ahead of their own. </p>
            <p>They typically feel insecure in situations where things are uncertain or chaotic. While this makes ESFJs well suited to positions that involve managing or supervising people, it can also lead to conflicts when they try to exercise control over people who do not welcome such direction. </p>
            <p>In social situations, INTPs tend to be quite easy-going and tolerant. However, they can become unyielding 
            when their beliefs or convictions are challenged. Their high emphasis on logic can make it difficult to not 
            correct others in situations where other people present arguments that are not rational or logical. Because 
            they rely on their own minds rather than others, they can also be very difficult to persuade.</p>
            
            
            <h3>Career Paths</h3>
            <p>Because ESFJs enjoy helping others, they often do well in practical settings that involve taking a caregiver role. Social service and healthcare careers are two areas in which ESFJs may excel at applying their helping nature and desire for order. </p> 
            <p>ESFJs have many traits that make them ideally suited to certain careers. For example, their dependability and innate need to take care of others mean that they often do well in jobs that involve supporting and caring for people, such as nursing or teaching. </p>
            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('E') && user_pers.includes('N') && user_pers.includes('F') && user_pers.includes('P')) {
        category = "The Champion";
        msg = ` 
            <h1>You fall into category of ENFP: The Champion</h1> 
            <p>ENFP: The Champion (Extraverted, Intuitive, Feeling, Perceiving) is a four-letter abbreviation for one of the 16 personality 
            types identified by the Myers-Briggs Type Indicator.1 The INFP personality type is often described as an "idealist"
             or "The Champion" personality. People with this kind of personality tend to be introverted, idealistic, creative, and driven by high values.</p>
             
             <p>INFPs also have strong interests in making the world a better place. In addition to wanting to gain a greater understanding of 
             themselves and how they fit into the world, they are also interested in how they can best help others. People with this personality 
             type spend a lot of time exploring their own purpose in life and thinking about how they can use their skills and talents to best serve humanity. </p>
            <p>INFP is also the opposite personality type of ESTJ. Other similar personality types include INTP and ENFJ. </p>
            
            <h3>Personal Relationships</h3>

            <p>INFPs are idealists so they tend to have high expectationsâ€”including in relationships. They might hold an idealized 
            image in their minds of their perfect partner, which can be a difficult role for any individual to fill.</p>
            <p>People with this personality type care deeply about other people, yet as introverts they can be difficult to know. 
            They do tend to become very close and deeply committed to the few that they forge close relationships with. </p>
            <p>They also dislike conflict and try to avoid it. When conflicts or arguments do arise, they usually focus more on how the 
            conflict makes them feel rather than the actual details of the argument. During arguments, they might seem overly emotional 
            or even irrational. However, they can also be good mediators by helping the people involved in a conflict identify and express their feelings. </p>
            <p>ENFPs are extraverts, which means that they love spending time with other people.5 Socializing actually gives them more energy, helping them to feel renewed, refreshed, and excited about life. While other types of extraverts tend to dislike solitude, ENFPs do have a need for some alone time in order to think and reflect.


ENFPs tend to be warm and passionate in relationships. As extraverts, they are naturally upbeat and gregarious. In relationships, they are always seeking growth and ways to make their partnerships stronger. They tend to be attentive and spontaneous. Their willingness to take risks can sometimes be stressful for those who love them.
</p>
            
            <h3>Career Paths</h3>
            <p> When choosing a career path, it is a good idea for people to understand the potential strengths and weaknesses of their personality type. People with the ENFP personality type do best in jobs that offer a lot of flexibility.4﻿

Because they are empathetic and interested in people, they often do well in service-oriented careers. They should avoid careers that involve completing a lot of detailed, routine tasks. 
</p>  

            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('E') && user_pers.includes('N') && user_pers.includes('F') && user_pers.includes('J')) {
        category = "The Giver";
        msg = `<h1>You fall into category of ENFJ: The Giver </h1> 
        <p>ENFJ: The Giver (Extraverted, Intuitive, Feeling, Judging) is a four-letter abbreviation for one of the 16 personality 
        types identified by the Myers-Briggs Type Indicator.1 The INFP personality type is often described as an "idealist"
         or "The Giver" personality. People with this kind of personality tend to be introverted, idealistic, creative, and driven by high values.</p>
         
         <p>INFPs also have strong interests in making the world a better place. In addition to wanting to gain a greater understanding of 
         themselves and how they fit into the world, they are also interested in how they can best help others. People with this personality 
         type spend a lot of time exploring their own purpose in life and thinking about how they can use their skills and talents to best serve humanity. </p>
        <p>INFP is also the opposite personality type of ESTJ. Other similar personality types include INTP and ENFJ. </p>
        
        <h3>Personal Relationships</h3>

        <p>INFPs are idealists so they tend to have high expectationsâ€”including in relationships. They might hold an idealized 
        image in their minds of their perfect partner, which can be a difficult role for any individual to fill.</p>
        <p>People with this personality type care deeply about other people, yet as introverts they can be difficult to know. 
        They do tend to become very close and deeply committed to the few that they forge close relationships with. </p>
        <p>They also dislike conflict and try to avoid it. When conflicts or arguments do arise, they usually focus more on how the 
        conflict makes them feel rather than the actual details of the argument. During arguments, they might seem overly emotional 
        or even irrational. However, they can also be good mediators by helping the people involved in a conflict identify and express their feelings. </p>
        <p>ENFJs value other people highly and are warm, nurturing, and supportive in personal relationships. At times, they can become very wrapped up in other people's problems.

They are altruistic and interested in helping others, which can sometimes come off as a bit overbearing. Despite this, they are usually very well liked and people appreciate their genuine concern and care.

As parents, ENFJs are nurturing and warm, although they can sometimes be accused of being so-called "helicopter parents." They are directly involved in their children's lives, although they can sometimes be quite strict and even rigid at times.
</p>
        
        <h3>Career Paths</h3>
        <p> ENFJs often do best in careers where they get to help other people and spend a great deal of time interacting with others. Because of their strong communication and organizational skills, ENFJs can make great leaders and managers.

They are good at organizing activities, helping each group member achieve their potential and resolving interpersonal conflicts. They strive to create harmony in all situations, and always seem to know what to do to ease tensions and minimize disagreements.
</p> 

        <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('E') && user_pers.includes('N') && user_pers.includes('T') && user_pers.includes('P')) {
        category = "The Debater";
        msg = `<h1>You fall into category of ENTP: The Debater</h1> 
        <p>ENTP: The Debater (Extroverted, Intuitive, Thinking, Perceiving) is a four-letter abbreviation for one of the 16 personality 
        types identified by the Myers-Briggs Type Indicator.1 The INFP personality type is often described as an "idealist"
         or "mediator" personality. People with this kind of personality tend to be introverted, idealistic, creative, and 
         driven by high values.</p>
         
         <p>INFPs also have strong interests in making the world a better place. In addition to wanting to gain a greater understanding of 
         themselves and how they fit into the world, they are also interested in how they can best help others. People with this personality 
         type spend a lot of time exploring their own purpose in life and thinking about how they can use their skills and talents to best serve humanity. </p>
        <p>INFP is also the opposite personality type of ESTJ. Other similar personality types include INTP and ENFJ. </p>
        
        <h3>Personal Relationships</h3>

        <p>INFPs are idealists so they tend to have high expectationsâ€”including in relationships. They might hold an idealized 
        image in their minds of their perfect partner, which can be a difficult role for any individual to fill.</p>
        <p>People with this personality type care deeply about other people, yet as introverts they can be difficult to know. 
        They do tend to become very close and deeply committed to the few that they forge close relationships with. </p>
        <p>They also dislike conflict and try to avoid it. When conflicts or arguments do arise, they usually focus more on how the 
        conflict makes them feel rather than the actual details of the argument. During arguments, they might seem overly emotional 
        or even irrational. However, they can also be good mediators by helping the people involved in a conflict identify and express their feelings. </p>
        <p>Since they are identified as extroverts, it may come as no surprise that ENTPs have very good people skills. They are skilled communicators and enjoy interacting with a wide circle of family, friends, and acquaintances. In conversations, other people often find them quick-witted.

ENTPs will often engage in debates simply because they enjoy having a good battle of the wits. Sometimes, their love of debates lead ENTPs to take on the role of the devil's advocate, which can sometimes lead to conflicts with others who feel like they are being intentionally combative and antagonistic.
</p>
        
        <h3>Career Paths</h3>
        <p> Routines and boredom are not good for the ENTP personality. They are non-conformists and do best in jobs when they can find excitement and express their creative freedom. ENTPs can be successful in a wide range of careers, as long as they do not feel hemmed in or bored.

As debaters with great communication skills, careers in law can offer the challenge and diversity that ENTPs crave. Jobs in the business world that combine the ENTPs rationality, creativity, and natural leadership abilities can also be very rewarding.. </p> 

        <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }
    if (user_pers.includes('E') && user_pers.includes('N') && user_pers.includes('T') && user_pers.includes('J')) {
        category = "The Commander";
        msg = `<h1>You fall into category of ENTJ: The Commander </h1> 
            <p>The acronym ENTJ represents one of the 16 personality types that are identified by the Myers-Briggs Type Indicator. This popular personality assessment was developed by Isabel Myers and her mother Katherine Briggs. The assessment tool is based on Carl Jung's theory of personality types. Other people often describe people with this type of personality as assertive, confident, and outspoken. </p>
             
             <p>According to psychologist David Keirsey, the ENTJ type is quite rare, accounting for a mere 2% of the population.</p>

            <h3>Personal Relationships</h3>

            <p>Since ENTJs are extraverts, they gain energy from socializing (unlike introverts, who expend energy in social situations). They love having passionate and lively conversations and debates. In some cases, other people can feel intimidated by the ENTJs confidence and strong verbal skills. When they have a good idea, people with this personality type feel compelled to share their point of view with others. </p>
            <p>Despite their verbal abilities, ENTJs are not always good at understanding other people's emotions. Expressing emotions can be difficult for them at times, and their tendency to get into debates can make them seem aggressive, argumentative, and confrontational. People can overcome this problem by making a conscious effort to think about how other people might be feeling. </p>
            <p>They may struggle to understand or get along with more sensitive personality types. While they are extraverts, they are not emotionally expressive and other people may see them as insensitive. 
            </p>
            
            <h3>Career Paths</h3>
            <p> Thanks to their comfort in the spotlight, ability to communicate, and a tendency to make quick decisions, ENTJs tend to naturally fall into leadership roles.</p> 
            <p>These individuals sometimes find themselves taking control of a group without really knowing how they came to be in such a position. Because of their love for structure and order, the ENTJ is also good at supervising and directing others and helping groups complete tasks and achieve goals. They can quickly see what needs to be accomplished, develop a plan of action, and assign roles to group members. </p>
            <p>ENTJs do best in careers where there is a lot of structure, but plenty of room for variety. Jobs that allow them to meet and interact with lots of different people are ideal. People with this type bring a lot of desirable skills to the table, including excellent leadership and communication skills, a hard-working attitude, and an ability to plan for the future. </p>
            <p>Fore more information please check MBTI types on our website</p>
                     
            `;
    }



    console.log(category);
    send_email(msg, category);

    // window.open("inspector.html", '_blank');

    if (category === "The Inspector") {
        window.open("inspector.html", '_blank');
    }
    if (category === "The Crafter") {
        window.open("crafter.html", '_blank');
    }
    if (category === "The Protector") {
        window.open("protector.html", '_blank');
    }
    if (category === "The Artist") {
        window.open("artist.html", '_blank');
    }
    if (category === "The Advocate") {
        window.open("advocate.html", '_blank');
    }
    if (category === "The Mediator") {
        window.open("mediator.html", '_blank');
    }
    if (category === "The Architect") {
        window.open("architect.html", '_blank');
    }
    if (category === "The Thinker") {
        window.open("thinker.html", '_blank');
    }
    if (category === "The Persuader") {
        window.open("persuader.html", '_blank');
    }
    if (category === "The Director") {
        window.open("director.html", '_blank');
    }
    if (category === "The Performer") {
        window.open("performer.html", '_blank');
    }
    if (category === "The Caregiver") {
        window.open("caregiver.html", '_blank');
    }
    if (category === "The Champion") {
        window.open("champion.html", '_blank');
    }
    if (category === "The Giver") {
        window.open("giver.html", '_blank');
    }
    if (category === "The Debater") {
        window.open("debater.html", '_blank');
    }
    if (category === "The Commander") {
        window.open("commander.html", '_blank');
    }



};


function send_email(msg, category) {
    let email = document.getElementById("inputemail").value;
    console.log(email)

    Email.send({
        Host: "smtp.gmail.com",
        //SecureToken: "2d466964-c244-45d4-8d53-230cbad7da9c",
        Username: "seikakufinder@gmail.com",
        Password: "kzinlswhsgrwinfu",
        To: email,
        From: "seikakufinder@gmail.com",
        Subject: "Results says you are " + category,
        Body: msg

    }).then(
        (message) => alert("Mail has been sent!")
    );

}


