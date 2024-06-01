import React from 'react';

const data = {
  low: [
    {
      title: 'Continue to monitor progress',
      description:
        'Individuals with a low risk of dyslexia may still benefit from ongoing monitoring of their reading and language development. Regularly assess their reading skills, including fluency, comprehension, and decoding abilities. If any difficulties arise, provide additional support and resources to address those specific areas.'
    },
    {
      title: 'Maintain a supportive learning environment',
      description:
        'Create a positive and supportive learning environment at home. Establish a daily reading routine where the individual can explore various reading materials. Provide access to a wide range of age-appropriate books, magazines, and digital resources. Encourage reading for pleasure and engage in discussions about the content to enhance comprehension skills.'
    },
    {
      title: 'Collaborate with educators',
      description:
        "Stay in touch with teachers or educational professionals to ensure any potential reading challenges are promptly addressed. Share information about the individual's reading progress, strengths, and areas for improvement. Collaborate with educators to develop strategies that support reading skills and promote a positive classroom experience."
    },
    {
      title: 'Encourage diverse reading materials',
      description:
        'Provide access to various reading materials, including fiction, non-fiction, magazines, newspapers, and online articles. Encourage the exploration of different genres and topics to broaden vocabulary, knowledge, and reading comprehension skills.'
    },
    {
      title: 'Promote reading aloud',
      description:
        'Encourage the individual to read aloud regularly. Reading aloud can help improve fluency, pronunciation, and expression. It also enhances phonemic awareness, as individuals hear the sounds and patterns of words.'
    },
    {
      title: 'Develop vocabulary skills',
      description:
        'Foster vocabulary development by introducing new words through conversations, context-rich activities, and word games. Encourage the individual to use a dictionary or online resources to look up unfamiliar words and explore their meanings.'
    },

    {
      title: 'Provide reading support',
      description:
        'Offer guidance and support during reading activities. Help the individual break down complex sentences, identify main ideas, and make connections between the text and their prior knowledge. Model reading strategies, such as predicting, visualizing, and summarizing, to enhance comprehension.'
    },

    {
      title: 'Promote writing skills',
      description:
        'Encourage the practice of writing through journaling, creative writing exercises, and reflective activities. Provide constructive feedback to improve spelling, grammar, and sentence structure. Emphasize the importance of revision and editing in the writing process.'
    }
  ],
  medium: [
    {
      title: 'Seek professional assessment',
      description:
        "It's essential to seek a comprehensive assessment by a learning specialist, educational psychologist, or dyslexia expert. They will administer a battery of tests to evaluate reading skills, cognitive abilities, and language processing. The assessment will provide a clearer understanding of the individual's reading profile and determine if dyslexia is present."
    },
    {
      title: 'Implement multisensory learning techniques',
      description:
        'Multisensory learning approaches, such as the Orton-Gillingham method, can be beneficial for individuals with medium risk of dyslexia. These approaches engage multiple senses (visual, auditory, kinesthetic) simultaneously to reinforce reading skills. They involve structured, systematic, and repetitive instruction, focusing on phonics, decoding, and spelling.'
    },
    {
      title: 'Access specialized support',
      description:
        'Enroll in interventions or programs specifically designed for individuals with dyslexia. Structured literacy programs, like Wilson Reading System or Barton Reading System, provide explicit, systematic, and cumulative instruction in phonological awareness, phonics, fluency, vocabulary, and comprehension. Additionally, assistive technologies, such as text-to-speech software or audiobooks, can help compensate for reading difficulties and enhance comprehension.'
    },
    {
      title: 'Target phonemic awareness',
      description:
        'Focus on developing phonemic awareness skills, such as recognizing and manipulating individual sounds in words. Practice segmenting and blending sounds, identifying rhymes, and playing word games that emphasize phonological skills.'
    },
    {
      title: 'Utilize mnemonics and visual aids',
      description:
        'Introduce mnemonic techniques and visual aids to support memory and recall of information. For example, acronyms, imagery, and color-coding can help individuals remember spelling rules, word associations, and other language concepts.'
    },
    {
      title: 'Break down complex tasks',
      description:
        'Break down complex reading and writing tasks into smaller, manageable steps. Provide clear instructions, visual organizers, or checklists to help individuals organize their thoughts and track their progress. This approach can reduce overwhelm and enhance task completion.'
    },
    {
      title: 'Encourage self-advocacy',
      description:
        'Teach individuals to advocate for their needs and communicate effectively with teachers and peers. Help them develop self-advocacy skills to request accommodations, ask for clarification, or seek additional support when necessary.'
    },
    {
      title: 'Integrate technology',
      description:
        'Explore assistive technologies and educational apps that can support reading and writing skills. Text-to-speech software, speech recognition tools, word prediction software, and dyslexia-friendly fonts can enhance accessibility and independence in reading and writing activities.'
    }
  ],
  high: [
    {
      title: 'Seek a comprehensive evaluation',
      description:
        'Schedule a comprehensive evaluation with a specialized professional, such as a learning specialist, educational psychologist, or dyslexia expert. The evaluation will include a thorough assessment of reading skills, cognitive abilities, language processing, and related difficulties. This evaluation will provide a detailed understanding of dyslexia and any additional support needs.'
    },
    {
      title: 'Collaborate with an Individualized Education Program (IEP) team',
      description:
        "Individuals in a school setting should work closely with the IEP team to develop a personalized plan. The IEP team will design appropriate accommodations, modifications, and specialized instruction tailored to the individual's specific needs. These may include extended time for assignments, preferential seating, assistive technology, and targeted intervention programs."
    },
    {
      title: 'Access specialized intervention programs',
      description:
        'Enroll in intensive remedial intervention programs delivered by trained professionals experienced in dyslexia interventions. Programs such as the Lindamood-Bell program or the Multisensory Structured Language Education (MSLE) approach provide targeted instruction in reading, writing, spelling, and language skills. These programs often focus on building phonological awareness, phonics, vocabulary, comprehension, and fluency through multisensory techniques.'
    },
    {
      title: 'Build phonics skills',
      description:
        'Provide explicit instruction in phonics, focusing on letter-sound relationships, decoding strategies, and phonics rules. Utilize multisensory techniques, such as tracing letters while saying their sounds, to reinforce learning.'
    },
    {
      title: 'Address working memory challenges',
      description:
        'Individuals with dyslexia often experience working memory challenges. Teach strategies to improve working memory, such as using visual imagery, chunking information, or employing mnemonic devices to aid in memory retention.'
    },
    {
      title: 'Implement structured routines',
      description:
        'Establish structured routines and predictability in daily activities. Consistency and predictability can help individuals with dyslexia feel more organized and reduce anxiety related to academic tasks.'
    },
    {
      title: 'Provide scaffolding and visual supports',
      description:
        'Use visual aids, graphic organizers, and other visual supports to enhance comprehension and organization of information. Scaffold learning by breaking down tasks, providing step-by-step instructions, and offering guided practice before independent work.'
    },
    {
      title: 'Encourage self-reflection',
      description:
        'Foster self-reflection and metacognitive skills by encouraging individuals to monitor their own reading and learning processes'
    }
  ]
};

const NextSteps = ({ category }) => {
  function getRandomItemsFromArray(array, count) {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  }
  return (
    <div className='max-w-xl mx-auto p-8 bg-white rounded-lg shadow'>
      <h2 className='text-2xl font-medium mb-4'>Next Steps</h2>
      <ul className='list-disc pl-6'>
        {getRandomItemsFromArray(data[category], 5).map((item) => (
          <li className='mb-2'>
            <span className='font-bold'>{item.title}: </span> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NextSteps;
