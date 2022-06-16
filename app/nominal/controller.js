const Nominal = require('./model');

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');

      const alert = { message: alertMessage, status: alertStatus };

      const nominal = await Nominal.find();

      res.render('admin/nominal/view_nominal', { nominal, alert });
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/category');
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render('admin/nominal/create');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/category');
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { coinName, coinQuantity, price } = req.body;

      const nominal = await Nominal({ coinName, coinQuantity, price });
      await nominal.save();

      req.flash('alertMessage', 'Berhasil tambah nominal');
      req.flash('alertStatus', 'success');

      res.redirect('/nominal');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/nominal');
    }
  },
  //   viewEdit: async (req, res) => {
  //     try {
  //       const { id } = req.params;

  //       const category = await Nominal.findOne({ _id: id });

  //       res.render('admin/category/edit', {
  //         category,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },

  //   actionEdit: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       const { name } = req.body;

  //       await Nominal.findOneAndUpdate({ _id: id }, { name });
  //       req.flash('alertMessage', 'Berhasil update data');
  //       req.flash('alertStatus', 'warning');

  //       res.redirect('/category');
  //     } catch (error) {
  //       req.flash('alertMessage', `${error.message}`);
  //       req.flash('alertStatus', 'success');
  //       res.redirect('/category');
  //     }
  //   },

  //   deleteAction: async (req, res) => {
  //     try {
  //       const { id } = req.params;

  //       await Nominal.findOneAndRemove({ _id: id });

  //       req.flash('alertMessage', 'Berhasil hapus data');
  //       req.flash('alertStatus', 'success');
  //       res.redirect('/category');
  //     } catch (error) {
  //       req.flash('alertMessage', `${error.message}`);
  //       req.flash('alertStatus', 'danger');
  //       res.redirect('/category');
  //     }
  //   },
};
