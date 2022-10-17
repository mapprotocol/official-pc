const data = [
  {
    title: 'Team',
    value: 15,
    color: '#87A2FB',
    info: (
      <ul className='list-disc'>
        <li>For developers of MAP Protocol</li>
        <li>Vesting period of 2019-2024</li>
      </ul>
    ),
  },
  {
    title: 'Foundation',
    value: 12,
    color: '#3A3845',
    info: ['For operation of MAP Protocol and related projects'],
  },
  {
    title: 'Ecosystem DAO',
    value: 21,
    color: '#0F3D3E',
    info: ['No locking. Governed by DAO'],
  },
  {
    title: 'Institutions & Partners',
    value: 22,
    color: '#182747',
    info: ['For investors, advisors and supporters'],
  },
  {
    title: 'Mining',
    value: 30,
    color: '#6F38C5',
    info: (
      <ul className='list-disc'>
        <li>
          To reward validators on MAP Relay ChainandMaintainer for updating
          Light-Clients
        </li>
        <li>
          Released by 1% p.a. for the first 2 years, then 2% forthe next 14
          years. Among which:
          <ul className='ml-8 list-disc'>
            <li>70% of the release are for validators</li>
            <li>30% of the release are for maintainers</li>
          </ul>
        </li>
        <li>Will issue new shares after 16 years</li>
      </ul>
    ),
  },
];

export default data;
