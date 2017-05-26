module.exports = {
  DEFAULT_TREE_DATA: {
    title: "Table of Contents",
    childNodes:
    [
      { title: "Chapter 1" },

      {
        title: "Chapter 2",
        childNodes:
        [
          {
            title: "Section 2.1",
            childNodes:
            [
              { title: "SubSection 2.1.1" }
            ]
          },
          { title: " Section 2.2" }
        ]
      },

      { title: "Chapter 3" },
    ]
  },

  DEFAULT_STREAMING_DATA: [
    {
      data: "data1data1data1data1data1data1"
    },
    {
      data: "data2data2data2data2data2data2"
    },
    {
      data: "data3data2data2data2data2data3"
    }
  ]

}