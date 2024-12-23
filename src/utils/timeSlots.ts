export const getTimeSlots = (): string[] => {
  const slots: string[] = [];
  
  // Morning slots (7 AM to 12 PM)
  for (let hour = 7; hour <= 12; hour++) {
    slots.push(
      `${hour.toString().padStart(2, '0')}:00`
    );
  }
  
  // Evening slots (8 PM to 10 PM)
  for (let hour = 20; hour <= 22; hour++) {
    slots.push(
      `${hour.toString().padStart(2, '0')}:00`
    );
  }
  
  return slots;
};

export const formatTimeSlot = (time: string): string => {
  const hour = parseInt(time.split(':')[0]);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour > 12 ? hour - 12 : hour;
  return `${hour12}:00 ${ampm}`;
};