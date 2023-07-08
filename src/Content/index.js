import { Box } from '@mui/material'
import React from 'react'
import ContentItem from './ContentItem';

const contentArray = [
  {
    title:"Get Things Done",
    description: "Software is a set of instructions, data or programs used to operate computers and execute specific tasks.",
    img: '/1.jpg'
  },
  {
    title:"Productivity is Brilliant",
    description: "Productivity is a measure of economic performance that compares the amount of goods and services produced (output) with the amount of inputs used to produce those goods and services.",
    img: '/2.jpg'
  },
  {
    title:"Fast Development",
    description: "Agility is one of the performance-related component of physical fitness.",
    img: '/3.jpg'
  }
];
const Content = () => {
  return (
    <Box 
      bgcolor='#fbf2f2' 
      display='flex' 
      justifyContent='center' 
      flexDirection='column'
      width='100%'
      height='10%'
    >
      {contentArray.map((content, index) => (
        <ContentItem 
          title={content.title}
          description={content.description}
          img={content.img}
          key={index}
          swap={index % 2 == 0 ? true : false}
        />
      ))}
    </Box>
  )
}

export default Content