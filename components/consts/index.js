import Journal from "../Icons/Journal";
import Meditate from "../Icons/Meditate";
import HappyFace from "../Icons/HappyFace";
import SadFace from "../Icons/SadFace"

export const RESULT_MAP = {
    "000": {
      name: "Result A",
      actionName: "Take a Walk & Drink Water",
      actions: [
        {
          name: "Take a Walk",
          IconComponent: SadFace,
        },
        {
          name: "Drink Water",
          IconComponent: Meditate,
        }
      ]
      
    },
    "001": {
      name: "Result B",
      actionName: "Take a Walk & Play a Team Sport",
      actions: [
        {
          name: "Take a Walk",
          IconComponent: Meditate,
        },
        {
          name: "Play a Team Sport",
          IconComponent: Meditate,
        }
      ]
      
    },
    "010":{
      name: "Result C",
      actionName: "Observe Nature & Garden",
      actions: [
        {
          name: "Observe Nature",
          IconComponent: Meditate,
        },
        {
          name: "Garden",
          IconComponent: Meditate,
        }
      ]
      
    },
    "011": {
      name: "Result D",
      actionName: "Observe Nature & Picnic",
      actions: [
        {
          name: "Observe Nature",
          IconComponent: Meditate,
        },
        {
          name: "Picnic",
          IconComponent: Meditate,
        }
      ]
      
    },
    "100": {
      name: "Result E",
      actionName: "Yoga & Drink Water",
      actions: [
        {
          name: "Yoga",
          IconComponent: Meditate,
        },
        {
          name: "Drink Water",
          IconComponent: Meditate,
        }
      ]
      
    },
    "101": {
      name: "Result F",
      actionName: "Yoga & Go to the Gym",
      actions: [
        {
          name: "Yoga",
          IconComponent: Meditate,
        },
        {
          name: "Go to the Gym",
          IconComponent: Meditate,
        }
      ]
      
    },
    "110": {
      name: "Result G",
      actionName: "Meditate & Journal",
      actions: [
        {
          name: "Meditate",
          IconComponent: Meditate,
        },
        {
          name: "Journal",
          IconComponent: Journal,
        }
      ]
      
    },
    "111": {
      name: "Result H",
      actionName: "Meditate & Spend time with Friends/Family",
      actions: [
        {
          name: "Meditate",
          IconComponent: Meditate,
        },
        {
          name: "FriendsFamily",
          IconComponent: Meditate,
        }
      ]
      
    }
  };

  export const QUESTIONS = [
    {
      question: "How is your heart?",
      answers: ["Content", "Depressed", "Frustrated"]
    },
    {
      question: "What environment do you prefer to be in?",
      answers: ["Outdoor", "Indoor"]
    },
    {
      question: "What type of activities do you prefer?",
      answers: ["High Impact", "Low Impact"]
    },
    {
      question: "Are you introverted or extroverted?",
      answers: ["Introverted", "Extroverted"]
    }
  ];