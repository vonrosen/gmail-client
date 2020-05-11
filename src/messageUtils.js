const filterMessagesAfterTimestamp = ({ messages, timestamp }) => 
    messages.filter(({ internalDate }) => internalDate && Number(internalDate) > timestamp);

module.exports = {
  filterMessagesAfterTimestamp,
};
